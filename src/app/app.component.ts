import { Component } from '@angular/core';
import { slider } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})
export class AppComponent {

  // You can use this data to control which transition to execute for each route.
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  
  timeoutID: number;

constructor(){}
 
setup() {
    document.addEventListener("mousemove", this.resetTimer, false);
    document.addEventListener("mousedown", this.resetTimer, false);
    document.addEventListener("keypress", this.resetTimer, false);
    document.addEventListener("DOMMouseScroll", this.resetTimer, false);
    document.addEventListener("mousewheel", this.resetTimer, false);
    document.addEventListener("touchmove", this.resetTimer, false);
    document.addEventListener("MSPointerMove", this.resetTimer, false);
 
    thisstartTimer();
}
setup();
 
 startTimer() {
    // wait 2 seconds before calling goInactive
    this.timeoutID = window.setTimeout(this.goInactive, 2000);
}
 
 resetTimer(e) {
    window.clearTimeout(this.timeoutID);
 
    this.goActive();
}
 
goInactive() {
  console.log("I'm inActive");
}
 
goActive() {
  console.log("I'm active");         
    startTimer();
}

}
