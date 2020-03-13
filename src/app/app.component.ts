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
  // You can use this data to control which transition to execute for each route.
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  timer: any;

  constructor() {}

  //Seting up the listners to DOM if the user is active
  setup() {
    document.addEventListener("mousemove", ()=> {
      this.resetTimer(this.timer)
    });
    // document.addEventListener("keypress", this.resetTimer);
    this.timer = this.startTimer();
  }

  startTimer() {
    // wait 2 seconds before calling checkInactive
    return setTimeout(this.checkInactive, 2000);
  }

  //Reset the timer if the user is moving the mouse or pressing a key
  resetTimer(timer) {
    clearTimeout(timer);
    this.timer = this.startTimer();
  }

  //If the user is inactive this function will excute
  checkInactive() {
    console.log("I'm inActive");
  }

 
}
