import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

export interface ThresholdData {
  green: number;
  yellow: number;
  red: number;
  greenDirection: 'vor' | 'nach';
  yellowDirection: 'vor' | 'nach';
  redDirection: 'vor' | 'nach';
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
    greenDirection: 'vor',
    yellowDirection: 'vor',
    redDirection: 'vor',
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

  onGreenDirectionChange(direction: 'vor' | 'nach') {
    this.thresholds.greenDirection = direction;
  }

  onYellowDirectionChange(direction: 'vor' | 'nach') {
    this.thresholds.yellowDirection = direction;
  }

  onRedDirectionChange(direction: 'vor' | 'nach') {
    this.thresholds.redDirection = direction;
  }
}
