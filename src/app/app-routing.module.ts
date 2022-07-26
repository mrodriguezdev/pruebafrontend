import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { RegistrarDocumentosComponent } from './registrar-documentos/registrar-documentos.component';
import { RegistrarDomicilioComponent } from './registrar-domicilio/registrar-domicilio.component';

const routes: Routes = [
  {path: 'clientes', component: ListaClientesComponent},
  {path: '', redirectTo: 'clientes', pathMatch:'full'},
  {path: 'registrar-cliente', component: RegistrarClienteComponent},
  {path: 'registrar-domicilio', component: RegistrarDomicilioComponent},
  {path: 'registrar-documento', component: RegistrarDocumentosComponent},
  {path: 'actualizar-cliente/:IDCLIENTE', component: ActualizarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
