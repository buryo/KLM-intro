import { Component, OnInit } from '@angular/core';

// Icons
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-radical-innovation',
  templateUrl: './radical-innovation.component.html',
  styleUrls: ['./radical-innovation.component.css']
})
export class RadicalInnovationComponent implements OnInit {
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleLeft = faChevronCircleLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
