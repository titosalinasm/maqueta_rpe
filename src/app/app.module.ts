import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EntidadPrestadoraComponent } from './componentes/entidad-prestadora/entidad-prestadora.component';
import { OrganizacionEprComponent } from './componentes/organizacion-epr/organizacion-epr.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ListaConvocatoriaComponent } from './componentes/lista-convocatoria/lista-convocatoria.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { ConvocatoriasComponent } from './componentes/convocatorias/convocatorias.component';
import { PostulacionesComponent } from './componentes/postulaciones/postulaciones.component';
import { TestProductivoComponent } from './componentes/test-productivo/test-productivo.component';
import { CalendarioServicioComponent } from './componentes/calendario-servicio/calendario-servicio.component';
import { EvaluarTpeComponent } from './componentes/evaluar-tpe/evaluar-tpe.component';
import { EvaluarPostulacionDsComponent } from './componentes/evaluar-postulacion-ds/evaluar-postulacion-ds.component';
import { ListaNotificacionesComponent } from './componentes/lista-notificaciones/lista-notificaciones.component';
import { LoginExtranetComponent } from './componentes/login-extranet/login-extranet.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './servicios/auth.interceptor';
import { EntidadPrestadoraService } from './servicios/serv-entidad-prestadora/entidad-prestadora.service';
import { TokenService } from './servicios/token.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    UsuarioComponent,
    InicioComponent,
    EntidadPrestadoraComponent,
    OrganizacionEprComponent,
    ServiciosComponent,
    ListaConvocatoriaComponent,
    RequisitosComponent,
    ConvocatoriasComponent,
    PostulacionesComponent,
    TestProductivoComponent,
    CalendarioServicioComponent,
    EvaluarTpeComponent,
    EvaluarPostulacionDsComponent,
    ListaNotificacionesComponent,
    LoginExtranetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    EntidadPrestadoraService,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
