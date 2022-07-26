import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

cliente: Clientes = new Clientes();

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {

  }

  guardarEmpleado(){
    this.clientesService.registrarCliente(this.cliente).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  iraRegistroDomicilio(){
    this.router.navigate(['/registrar-domicilio'])
  }

  onSubmit(){
    this.guardarEmpleado();
    console.log(this.cliente)
  }
}
