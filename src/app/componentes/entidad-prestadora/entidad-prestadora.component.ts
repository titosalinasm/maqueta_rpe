import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EntidadPrestadoraService } from 'src/app/servicios/serv-entidad-prestadora/entidad-prestadora.service';
import { IEntidadPrestadora } from 'src/app/interfaces/IEntidadPrestadora'
@Component({
  selector: 'app-entidad-prestadora',
  templateUrl: './entidad-prestadora.component.html',
  styleUrls: ['./entidad-prestadora.component.css']
})
export class EntidadPrestadoraComponent implements OnInit {

  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  listaEntidadPrestadora : IEntidadPrestadora[]=[];

  constructor(private modalService: BsModalService,
              private entidadPrestadoraService: EntidadPrestadoraService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  crearEntidad(){

    let formCrear={
      numbreEntidad:'Entidad 1'
    }


    this.entidadPrestadoraService.add$(formCrear).subscribe(
      resp=>{
        this.listaEntidadPrestadora=resp.entidadPrestadora;
      },
      error=>{

      },


    );
  }

}
