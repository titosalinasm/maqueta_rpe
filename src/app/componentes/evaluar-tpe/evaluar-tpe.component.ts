import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-evaluar-tpe',
  templateUrl: './evaluar-tpe.component.html',
  styleUrls: ['./evaluar-tpe.component.css']
})
export class EvaluarTpeComponent implements OnInit {
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

  openModalServiciosRecomendados(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config1);
  }

}
