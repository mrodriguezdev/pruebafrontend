import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  IDCLIENTE:number;
  cliente:Clientes = new Clientes();

  constructor(private clientesService: ClientesService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.IDCLIENTE = this.route.snapshot.params['iIDCLIENTEd'];
    this.clientesService.obtenerEmpleadoPorId(this.IDCLIENTE).subscribe(dato =>{
      this.cliente = dato;
    }, error => console.log(error));
  }

  iralistadoClientes(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.clientesService.actualizarCliente(this.IDCLIENTE,this.cliente).subscribe(dato => {
      this.iralistadoClientes();
    },error => console.log(error));
  }
}
