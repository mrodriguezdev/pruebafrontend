import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documentos } from '../documentos';
import { DocumentosService } from '../documentos.service';

@Component({
  selector: 'app-registrar-documentos',
  templateUrl: './registrar-documentos.component.html',
  styleUrls: ['./registrar-documentos.component.css']
})
export class RegistrarDocumentosComponent implements OnInit {

  documentos : Documentos = new Documentos();

  constructor(private documentosService: DocumentosService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarDocumento(){
    this.documentosService.registrarDomicilio(this.documentos).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  iralistadoClientes(){
    this.router.navigate(['/clientes'])
  }

  onSubmit(){
    this.guardarDocumento();
    console.log(this.documentos)
  }
}
