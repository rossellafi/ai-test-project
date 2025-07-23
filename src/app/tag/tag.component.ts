import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface TagColor {
  name: string;
  background: string;
  text: string;
  border: string;
}

@Component({
  selector: "app-tag",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tag.component.html",
  styleUrl: "./tag.component.css",
})
export class TagComponent {
  @Input() text: string = "TAG";
  @Input() color: TagColor = this.defaultColors[0];

  // Predefined color combinations that meet contrast ratio requirements
  defaultColors: TagColor[] = [
    {
      name: "blue",
      background: "#9DCEE7",
      text: "#085881",
      border: "#085881"
    },
    {
      name: "green",
      background: "#B8E6B8",
      text: "#2E7D32",
      border: "#2E7D32"
    },
    {
      name: "orange",
      background: "#FFD4B3",
      text: "#E65100",
      border: "#E65100"
    },
    {
      name: "purple",
      background: "#E1BEE7",
      text: "#6A1B9A",
      border: "#6A1B9A"
    },
    {
      name: "red",
      background: "#FFCDD2",
      text: "#C62828",
      border: "#C62828"
    },
    {
      name: "teal",
      background: "#B2DFDB",
      text: "#00695C",
      border: "#00695C"
    },
    {
      name: "indigo",
      background: "#C5CAE9",
      text: "#303F9F",
      border: "#303F9F"
    },
    {
      name: "amber",
      background: "#FFECB3",
      text: "#FF8F00",
      border: "#FF8F00"
    }
  ];

  ngOnInit() {
    // If no color is explicitly provided, assign a random one
    if (!this.color || this.color === this.defaultColors[0]) {
      this.color = this.getRandomColor();
    }
  }

  getRandomColor(): TagColor {
    const randomIndex = Math.floor(Math.random() * this.defaultColors.length);
    return this.defaultColors[randomIndex];
  }

  // Method to get a specific color by name
  getColorByName(colorName: string): TagColor {
    return this.defaultColors.find(color => color.name === colorName) || this.defaultColors[0];
  }
}
