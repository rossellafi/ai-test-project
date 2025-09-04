import { Component, OnDestroy, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StepperComponent, StepData } from "./stepper/stepper.component";
import { ProjectCardComponent, ProjectData } from "./project-card/project-card.component";
import { MilestoneThresholdComponent, ThresholdData } from "./milestone-threshold/milestone-threshold.component";
import { TagComponent } from "./tag/tag.component";
import { NoteDialogComponent } from "./note-dialog/note-dialog.component";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { Attachment, CommentItem } from "./models/comment.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    ProjectCardComponent,
    MilestoneThresholdComponent,
    TagComponent,
    NoteDialogComponent,
    CommentListComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy {
  title = "ai-test-project";

  stepperData: StepData[] = [
    {
      id: "1",
      label: "Daten",
      icon: "contract",
      state: "active",
    },
    {
      id: "2",
      label: "Rollen",
      icon: "people",
      state: "default",
    },
    {
      id: "3",
      label: "Zeitplan",
      icon: "clock",
      state: "default",
    },
  ];

  projectData: ProjectData = {
    id: "001",
    name: "Projektname",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9bf887d3445e4c3a82e5828942eb6b99%2F069a85898a4b45419c00c848294edac1?format=webp&width=800",
    phase: "Projektentwicklung",
    epc: "WI Energy Entwicklung GmbH",
    isFavorite: false,
  };

  thresholdData: ThresholdData = {
    green: 30,
    yellow: 14,
    red: 7,
    greenDirection: "vor",
    yellowDirection: "vor",
    redDirection: "vor",
    notificationsEnabled: true,
  };

  // Sample tags for demonstration
  sampleTags = [
    { text: "Allgemein" },
    { text: "Entwicklung" },
    { text: "Design" },
    { text: "Testing" },
    { text: "Marketing" },
  ];

  showNoteDialog = signal(false);
  comments = signal<CommentItem[]>([]);

  openNoteDialog() {
    this.showNoteDialog.set(true);
  }

  closeNoteDialog() {
    this.showNoteDialog.set(false);
  }

  addComment(payload: { text: string; files: File[] }) {
    const attachments: Attachment[] = payload.files.map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
      url: URL.createObjectURL(f),
    }));

    const newComment: CommentItem = {
      id: crypto.randomUUID(),
      text: payload.text,
      createdAt: new Date(),
      attachments,
    };

    this.comments.set([newComment, ...this.comments()]);
    this.closeNoteDialog();
  }

  deleteComment(id: string) {
    const target = this.comments().find((c) => c.id === id);
    if (target) {
      target.attachments.forEach((a) => URL.revokeObjectURL(a.url));
    }
    this.comments.set(this.comments().filter((c) => c.id !== id));
  }

  ngOnDestroy(): void {
    this.comments().forEach((c) => c.attachments.forEach((a) => URL.revokeObjectURL(a.url)));
  }
}
