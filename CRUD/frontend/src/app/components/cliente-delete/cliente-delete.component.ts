import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente-create/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente-create/cliente.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.sass']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe(cliente =>{
      this.cliente = cliente
    })
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.clienteService.showMessage('Cliente excluído com sucesso')
      this.router.navigate(['/primer'])
    });
  }

  cancelCliente(): void {
    this.router.navigate(['/primer'])
  }

}
