import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domicilios } from './domicilios';

@Injectable({
  providedIn: 'root'
})
export class DomiciliosService {
  
  private urlApi = "http://localhost:9000/api";

  constructor(private httpClient: HttpClient) { }

  registrarDomicilio(domicilios:Domicilios):Observable<Object>{
    return this.httpClient.post(`${(this.urlApi)}/registrarDomicilio`, domicilios);
   }

}
