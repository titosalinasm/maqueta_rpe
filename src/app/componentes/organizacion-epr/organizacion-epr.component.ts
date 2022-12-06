import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-organizacion-epr',
  templateUrl: './organizacion-epr.component.html',
  styleUrls: ['./organizacion-epr.component.css']
})
export class OrganizacionEprComponent implements OnInit {

  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-xl'
  };

  config2 = {
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config);
  }

  openModalEliminar(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config2);
  }
}
