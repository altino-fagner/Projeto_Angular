import { Cliente } from './cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.sass']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    name: '',
    cpf: null,
    cemig: null,
    cons_medio: null
  }
  
  constructor(private clienteService: ClienteService, private router: Router) { }


  ngOnInit(): void {
  }

  createCliente(): void {
    this.clienteService.create(this.cliente). subscribe(() => {
    this.clienteService.showMessage('Cliente cadastrado!')
    this.router.navigate(['/primer'])
    })
  }
  cancel(): void {
     this.router.navigate(['/primer'])
  }


  }
