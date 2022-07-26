import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domicilios } from '../domicilios';
import { DomiciliosService } from '../domicilios.service';

@Component({
  selector: 'app-registrar-domicilio',
  templateUrl: './registrar-domicilio.component.html',
  styleUrls: ['./registrar-domicilio.component.css']
})
export class RegistrarDomicilioComponent implements OnInit {

  domicilio : Domicilios = new Domicilios();

  constructor(private domiciliosService: DomiciliosService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarDomicilio(){
    this.domiciliosService.registrarDomicilio(this.domicilio).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  iraRegistroDomicilio(){
    this.router.navigate(['/registrar-domicilio'])
  }

  onSubmit(){
    this.guardarDomicilio();
    console.log(this.domicilio)
  }

}
