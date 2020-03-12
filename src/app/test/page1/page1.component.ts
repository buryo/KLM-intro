import { Component, OnInit } from '@angular/core';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  faChevronCircleRight = faChevronCircleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
