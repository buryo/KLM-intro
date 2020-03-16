import { Component, OnInit,Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RouterOutlet } from '@angular/router';
import {IddleService} from '../services/iddle.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ["./modal.component.css"],
  providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent implements OnInit {
  
  constructor( config: NgbModalConfig,
    private modalService: NgbModal,
    private idleFunction: IddleService
    ) {
      // customize default values of modals used by this component tree
       config.backdrop = 'static';
       config.keyboard = false;
       this.idleFunction.setup();
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



