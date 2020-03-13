import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IddleService {
  // The Window timer.
  timer: NodeJS.Timeout;

  constructor(private router: Router) {
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

  // wait 2 seconds before calling checkInactive
  startTimer() {
    return setTimeout(() => {
      if (confirm('Yo faggot, you there?')) {
        return false;
      } else {
        this.router.navigate(['/'])
      }
    }, 20000);
  }
}
