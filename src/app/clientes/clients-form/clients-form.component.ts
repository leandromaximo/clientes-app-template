import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  cliente: Cliente;

  constructor() {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente);
  }

}
