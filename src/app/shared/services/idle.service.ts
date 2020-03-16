import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class IdleService {
  // The Window timer.
  timer: NodeJS.Timeout;

  constructor(private router: Router, private modalService: NgbModal) {
    this.setup();
    this.timer = this.startTimer();
  }

  //Seting up the listners to DOM if the user is active
  setup() {
    document.addEventListener("mousemove", () => {
      clearTimeout(this.timer);
      this.timer = this.startTimer();
    });
  }

  // wait 20 seconds before calling checkInactive
  startTimer() {
    return setTimeout(() => {
      this.router.navigate(['/']);
    }, 20000);
  }
}
