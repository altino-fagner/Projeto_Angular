import { ClienteService } from './../cliente-create/cliente.service';
import { Cliente } from './../cliente-create/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.sass']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[]

  displayedColumns = ['id', 'name', 'cpf', 'cemig', 'action']

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
    })
  }

}
