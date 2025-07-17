import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StepperComponent, StepData } from "./stepper/stepper.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, StepperComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ai-test-project";

  stepperData: StepData[] = [
    {
      id: "1",
      label: "Projekt Daten",
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
}
