export interface Attachment {
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface CommentItem {
  id: string;
  text: string;
  createdAt: Date;
  attachments: Attachment[];
}
