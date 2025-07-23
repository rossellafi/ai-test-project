import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

export interface ThresholdData {
  green: number;
  yellow: number;
  red: number;
  notificationsEnabled: boolean;
}

@Component({
  selector: "app-milestone-threshold",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./milestone-threshold.component.html",
  styleUrl: "./milestone-threshold.component.css",
})
export class MilestoneThresholdComponent {
  @Input() thresholds: ThresholdData = {
    green: 30,
    yellow: 14,
    red: 7,
    notificationsEnabled: true
  };

  onGreenChange(value: number) {
    this.thresholds.green = value;
  }

  onYellowChange(value: number) {
    this.thresholds.yellow = value;
  }

  onRedChange(value: number) {
    this.thresholds.red = value;
  }

  onNotificationChange(checked: boolean) {
    this.thresholds.notificationsEnabled = checked;
  }
}
