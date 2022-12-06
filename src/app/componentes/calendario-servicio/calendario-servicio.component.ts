import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendario-servicio',
  templateUrl: './calendario-servicio.component.html',
  styleUrls: ['./calendario-servicio.component.css']
})
export class CalendarioServicioComponent implements OnInit {

  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  config1 = {
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-xl'
  };

  constructor(
              private modalService: BsModalService,
              ) {
               }

  ngOnInit(): void {
  }

  openModalAnularProgramacion(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  openModalDatosDelServicio(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config1);
  }

  confirmarParticipacion(){
    Swal.fire({
      title: 'CONFIRMAR PARTICIPACIÓN',
      text: "¿Está seguro de confirmar su participación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DA291C',
      cancelButtonColor: '#7F7F7F',
      confirmButtonText: 'Si, lo estoy'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
