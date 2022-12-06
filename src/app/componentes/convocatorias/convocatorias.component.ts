import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css']
})
export class ConvocatoriasComponent implements OnInit {
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

  openModalRequisito(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config3);
  }

  openModalFichaInscripcion(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  openModalEstado(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config3);
  }

  openModalResultado(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config3);
  }
}
