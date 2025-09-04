import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-drag-drop",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./drag-drop.component.html",
  styleUrls: ["./drag-drop.component.css"],
})
export class DragDropComponent {
  @Output() filesSelected = new EventEmitter<File[]>();

  onFileInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const files = Array.from(input.files);
    this.filesSelected.emit(files);
    input.value = "";
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!event.dataTransfer?.files) return;
    const files = Array.from(event.dataTransfer.files);
    this.filesSelected.emit(files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
