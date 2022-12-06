
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { IResponse } from '../response';
import { END_POINTS } from '../endpoints';


@Injectable()
export class EntidadPrestadoraService extends DataService<any>{
  constructor(
      protected override httpClient: HttpClient,
  ) {
      super(httpClient, environment.microServiceEntidadPrestadora+END_POINTS.entidad_prestadora.crear);
  }
}
