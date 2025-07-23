import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StepperComponent, StepData } from "./stepper/stepper.component";
import { ProjectCardComponent, ProjectData } from "./project-card/project-card.component";
import { MilestoneThresholdComponent, ThresholdData } from "./milestone-threshold/milestone-threshold.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, StepperComponent, ProjectCardComponent, MilestoneThresholdComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ai-test-project";

  stepperData: StepData[] = [
    {
      id: "1",
      label: "Daten",
      icon: "contract",
      state: "active",
    },
    {
      id: "2",
      label: "Rollen",
      icon: "people",
      state: "default",
    },
    {
      id: "3",
      label: "Zeitplan",
      icon: "clock",
      state: "default",
    },
  ];

  projectData: ProjectData = {
    id: "001",
    name: "Projektname",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9bf887d3445e4c3a82e5828942eb6b99%2F069a85898a4b45419c00c848294edac1?format=webp&width=800",
    phase: "Projektentwicklung",
    epc: "WI Energy Entwicklung GmbH",
    isFavorite: false
  };

  thresholdData: ThresholdData = {
    green: 30,
    yellow: 14,
    red: 7,
    notificationsEnabled: true
  };
}
