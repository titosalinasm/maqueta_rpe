import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-evaluar-postulacion-ds',
  templateUrl: './evaluar-postulacion-ds.component.html',
  styleUrls: ['./evaluar-postulacion-ds.component.css']
})
export class EvaluarPostulacionDsComponent implements OnInit {
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

  config2 = {
    backdrop: true,
    ignoreBackdropClick: false,
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModalDatosDelServicio(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config1);
  }

  openModalDeudaSancion(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config2);
  }
}
