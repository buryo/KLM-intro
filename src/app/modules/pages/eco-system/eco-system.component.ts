import { Component, OnInit } from '@angular/core';

// Icons
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-eco-system',
  templateUrl: './eco-system.component.html',
  styleUrls: ['./eco-system.component.css',]
})
export class EcoSystemComponent implements OnInit {
  faChevronCircleRight = faChevronCircleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
