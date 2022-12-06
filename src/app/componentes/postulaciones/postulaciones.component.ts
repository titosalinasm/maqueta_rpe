import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.component.html',
  styleUrls: ['./postulaciones.component.css']
})
export class PostulacionesComponent implements OnInit {

  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-xl'
  };

  config1 = {
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

  }

  openModalEvaluar(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config1);
  }
  openModalFicha(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
