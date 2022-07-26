import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import {HttpClientModule } from '@angular/common/http';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component'
import { FormsModule } from '@angular/forms';
import { RegistrarDomicilioComponent } from './registrar-domicilio/registrar-domicilio.component';
import { RegistrarDocumentosComponent } from './registrar-documentos/registrar-documentos.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistrarClienteComponent,
    RegistrarDomicilioComponent,
    RegistrarDocumentosComponent,
    ActualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
