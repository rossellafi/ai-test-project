import { Component, Input } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { CommentItem } from "../models/comment.model";

@Component({
  selector: "app-comment-list",
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"],
})
export class CommentListComponent {
  @Input() comments: CommentItem[] = [];
}
