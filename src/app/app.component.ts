<<<<<<< Updated upstream
import { Component, ViewEncapsulation } from '@angular/core';
=======
import { Component } from '@angular/core';
import { slider } from './route-animations';
import { RouterOutlet } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
<<<<<<< Updated upstream
  encapsulation: ViewEncapsulation.None
=======
  animations: [
    slider
  ]
>>>>>>> Stashed changes
})
export class AppComponent {

  // You can use this data to control which transition to execute for each route.
  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData);
    console.log(`${outlet.activatedRouteData.animation} second`);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
