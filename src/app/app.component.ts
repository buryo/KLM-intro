import { IdleService } from './shared/services/idle.service';
import { Component } from "@angular/core";
import { slider } from "./route-animations";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slider]
})
export class AppComponent {
  constructor(private IdleService: IdleService) {}

  // You can use this data to control which transition to execute for each route.
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  ngOnInit(): void {

  }
}
