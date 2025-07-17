import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface StepData {
  id: string;
  label: string;
  icon: string;
  state: "active" | "default";
}

@Component({
  selector: "app-stepper",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stepper.component.html",
  styleUrl: "./stepper.component.css",
})
export class StepperComponent {
  @Input() steps: StepData[] = [];
}
