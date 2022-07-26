import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documentos } from './documentos';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private urlApi = "http://localhost:9000/api";

  constructor(private httpClient: HttpClient) { }

  registrarDomicilio(documentos:Documentos):Observable<Object>{
    return this.httpClient.post(`${(this.urlApi)}/registrarDocumentos`, documentos);
   }
   
}
