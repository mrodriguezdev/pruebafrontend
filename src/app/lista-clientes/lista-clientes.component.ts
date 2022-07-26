import  swal   from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Clientes[];

  constructor(private clientesService:ClientesService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerListaClientes();
  }

  private obtenerListaClientes(){
    this.clientesService.obtenerListaClientes().subscribe( data => {
      this.clientes = data;
    })
  }


  actualizarEmpleado(IDCLIENTE:number){
    this.router.navigate(['actualizar-cliente',IDCLIENTE]);
  }

  eliminarCliente(IDCLIENTE:number){
    this.clientesService.eliminarCliente(IDCLIENTE).subscribe(data =>{
      console.log(data);
      this.obtenerListaClientes;
    })
  }
}
