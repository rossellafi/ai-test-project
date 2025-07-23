import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface ProjectData {
  id: string;
  name: string;
  imageUrl: string;
  phase: string;
  epc: string;
  isFavorite?: boolean;
}

@Component({
  selector: "app-project-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.css",
})
export class ProjectCardComponent {
  @Input() project: ProjectData = {
    id: "001",
    name: "Projektname",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9bf887d3445e4c3a82e5828942eb6b99%2F069a85898a4b45419c00c848294edac1?format=webp&width=800",
    phase: "Projektentwicklung",
    epc: "WI Energy Entwicklung GmbH",
    isFavorite: false
  };

  toggleFavorite() {
    this.project.isFavorite = !this.project.isFavorite;
  }
}
