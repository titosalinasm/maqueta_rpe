import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.css']
})
export class ListaNotificacionesComponent implements OnInit {

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

  openModalDetNotificacion(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config3);
  }

}
