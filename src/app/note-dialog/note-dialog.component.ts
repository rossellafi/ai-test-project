import { Component, EventEmitter, Output, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropComponent } from "../drag-drop/drag-drop.component";

@Component({
  selector: "app-note-dialog",
  standalone: true,
  imports: [CommonModule, DragDropComponent],
  templateUrl: "./note-dialog.component.html",
  styleUrls: ["./note-dialog.component.css"],
})
export class NoteDialogComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ text: string; files: File[] }>();

  noteText = signal("");
  selectedFiles = signal<File[]>([]);

  onFilesFromChild(files: File[]) {
    this.selectedFiles.set([...this.selectedFiles(), ...files]);
  }

  removeFile(index: number) {
    const list = [...this.selectedFiles()];
    list.splice(index, 1);
    this.selectedFiles.set(list);
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    const text = this.noteText().trim();
    if (!text) return; // simple guard, keep disabled state in template too
    this.save.emit({ text, files: this.selectedFiles() });
    this.noteText.set("");
    this.selectedFiles.set([]);
  }
}
