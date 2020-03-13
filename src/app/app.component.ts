import { IddleService } from "./shared/services/iddle.service";
import { Component, Input } from "@angular/core";
import { slider } from "./route-animations";
import { RouterOutlet } from "@angular/router";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [NgbModalConfig, NgbModal],
  animations: [slider]
})
export class AppComponent {
  constructor(
    private IddleService: IddleService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
      // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;
  }

  // You can use this data to control which transition to execute for each route.
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  ngOnInit(): void {}

  
  open(content) {
    this.modalService.open(content);
  }
}
