import { Component, EventEmitter, Output, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-note-dialog",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./note-dialog.component.html",
  styleUrls: ["./note-dialog.component.css"],
})
export class NoteDialogComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ text: string; files: File[] }>();

  noteText = signal("");
  selectedFiles = signal<File[]>([]);

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const files = Array.from(input.files);
    this.selectedFiles.set([...this.selectedFiles(), ...files]);
    // reset input so same file can be picked again if removed
    input.value = "";
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
