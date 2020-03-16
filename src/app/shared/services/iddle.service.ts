import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root"})
export class IddleService {
  // The Window timer.
  timer: NodeJS.Timeout;
  constructor(private router: Router) {
    this.setup();
    this.timer = this.startTimer();
    this.autoRedirect();
  }

  //Seting up the listners to DOM if the user is active
  setup() {
    document.addEventListener("mousemove", () => {
      clearTimeout(this.timer);
      this.timer = this.startTimer();
    });
  }

  autoRedirect() {
    return setTimeout(() => {
      console.log("autoRedirect");
      if (this.timer) {
        this.router.navigate(["/"]);
      }
    }, 2000);
  }

  // wait 20 seconds before calling checkInactive
  startTimer() {
    return setTimeout(() => {
      console.log("activated");

      if (confirm("Hallo is iemand daar?")) {
        return false;
      } else {
        this.router.navigate(["/"]);
      }
    }, 1000);
  }
}
