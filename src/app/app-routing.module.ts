import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioServicioComponent } from './componentes/calendario-servicio/calendario-servicio.component';
import { ConvocatoriasComponent } from './componentes/convocatorias/convocatorias.component';
import { EntidadPrestadoraComponent } from './componentes/entidad-prestadora/entidad-prestadora.component';
import { EvaluarPostulacionDsComponent } from './componentes/evaluar-postulacion-ds/evaluar-postulacion-ds.component';
import { EvaluarTpeComponent } from './componentes/evaluar-tpe/evaluar-tpe.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaConvocatoriaComponent } from './componentes/lista-convocatoria/lista-convocatoria.component';
import { ListaNotificacionesComponent } from './componentes/lista-notificaciones/lista-notificaciones.component';
import { LoginExtranetComponent } from './componentes/login-extranet/login-extranet.component';
import { LoginComponent } from './componentes/login/login.component';
import { OrganizacionEprComponent } from './componentes/organizacion-epr/organizacion-epr.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PostulacionesComponent } from './componentes/postulaciones/postulaciones.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { TestProductivoComponent } from './componentes/test-productivo/test-productivo.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent,},
  { path: 'perfil', component: PerfilComponent,},
  { path: 'usuario', component: UsuarioComponent,},
  { path: 'entidad-prestadora', component: EntidadPrestadoraComponent,},
  { path: 'organizacion-rpe', component: OrganizacionEprComponent,},
  { path: 'servicios', component: ServiciosComponent,},
  { path: 'listaconvocatoria', component: ListaConvocatoriaComponent,},
  { path: 'requisitos', component: RequisitosComponent,},
  { path: 'convocatorias', component: ConvocatoriasComponent,},
  { path: 'evalua-postulacion', component: PostulacionesComponent},
  { path: 'test-productivo', component: TestProductivoComponent},
  { path: 'calendario-servicios', component: CalendarioServicioComponent},
  { path: 'evaluar-tpe', component: EvaluarTpeComponent},
  { path: 'evaluar-postulacion-con-deuda-o-sanciona', component: EvaluarPostulacionDsComponent},
  { path: 'notificaciones', component: ListaNotificacionesComponent},
  { path: 'extranet', component: LoginExtranetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
