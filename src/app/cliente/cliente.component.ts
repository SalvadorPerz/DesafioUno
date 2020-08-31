import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  // idCliente = 1;
  cliente = new Cliente(1, '', '', '', '', '', 0, 0, 0);
  enviar = false;
  clientes = [];
  visita = 1;

  constructor() { }

  ngOnInit(): void {
  }

  afterSent(): boolean{
    // this.idCliente++;
    // this.clientes.push(this.cliente);
    this.clientes.push(this.cliente);
    this.cliente.dui = '';
    this.cliente.medicamento = '';
    this.cliente.nombre = '';
    this.cliente.nombreMasc = '';
    this.cliente.tratamiento = '';
    this.cliente.costo = 0;
    this.cliente.contador = 0;
    this.cliente.descuento = 0;
    return this.enviar = false;
  }

  onSubmit(): void{
    this.enviar = true;
  }

  numVisita(dui: string): void {
    this.clientes.forEach(element => {
      this.visita = element.contador + 1;
    });
    if (this.visita === 2){
      this.cliente.descuento = 0.05;
    }else if (this.visita > 4){
      this.cliente.descuento = 0.10;
    }else{
      this.cliente.descuento = 0;
    }

  }

  registrarVisita(dui: string, visita: number): void{
    // this.cliente.contador++;
    if (this.clientes.length > 0){
    this.clientes.forEach(element => {
      if (element.dui === dui){
        if (element.contador === 2){
          this.cliente.descuento = 0.05;
        }else if (element.contador > 4){
          this.cliente.descuento = 0.10;
        }else{
          this.cliente.descuento = 0;
        }
      }
    });
  }
  let clienteCopia = new Cliente(
    this.cliente.id,
    this.cliente.nombre,
    this.cliente.dui,
    this.cliente.nombreMasc,
    this.cliente.tratamiento,
    this.cliente.medicamento,
    this.cliente.costo,
    this.cliente.contador,
    this.cliente.descuento);
  
  this.clientes.push(clienteCopia);
  // return this.cliente.contador;
  }

}
