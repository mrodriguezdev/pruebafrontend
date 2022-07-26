import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlApi = "http://localhost:9000/api";

  constructor(private httpClient: HttpClient) {
    
   }

   // Metodo que nos lista todos los usuarios de la base
   obtenerListaClientes():Observable<Clientes[]>{
    return this.httpClient.get<Clientes[]>(`${(this.urlApi)}/infoClientes`)
   }

   // Metodo que nos guarda el registro de un cliente
   registrarCliente(cliente:Clientes):Observable<Object>{
    return this.httpClient.post(`${(this.urlApi)}/registrarCliente`, cliente);
   }

   // Metodo que nos busca cliente para actualizar
   obtenerEmpleadoPorId(IDCLIENTE:number):Observable<Clientes>{
    return this.httpClient.get<Clientes>(`${this.urlApi}/infoCliente/${IDCLIENTE}`);
  }

   // Metodo que nos actualiza un cliente
   actualizarCliente(IDCLIENTE:number, cliente:Clientes){
    return this.httpClient.put(`${this.urlApi}/modificarCliente/${IDCLIENTE}`, cliente)
   }

   // Metodo que nos elimina un cliente
   eliminarCliente(IDCLIENTE:number){
    return this.httpClient.delete(`${(this.urlApi)}/eliminarCliente/${IDCLIENTE}`)
   }

}
