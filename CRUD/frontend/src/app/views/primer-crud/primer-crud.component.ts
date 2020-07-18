import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-primer-crud',
  templateUrl: './primer-crud.component.html',
  styleUrls: ['./primer-crud.component.sass']
})
export class PrimerCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NavigateToClienteCreate(): void {
    this.router.navigate(['/cliente/create'])
  }

}
