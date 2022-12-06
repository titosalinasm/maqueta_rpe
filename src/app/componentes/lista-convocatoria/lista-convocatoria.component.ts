import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-convocatoria',
  templateUrl: './lista-convocatoria.component.html',
  styleUrls: ['./lista-convocatoria.component.css']
})
export class ListaConvocatoriaComponent implements OnInit {

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

  config3 = {
    backdrop: true,
    ignoreBackdropClick: false,
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }


  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config);
  }

  openModalDuplicar(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config3);
  }

  openModalEnviar(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config3);
  }

  openModalEliminar(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config3);
  }

  openModalRequisito(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config2);
  }
}
