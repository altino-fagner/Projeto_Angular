import { ClienteDeleteComponent } from './components/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { PrimerCrudComponent } from "./views/primer-crud/primer-crud.component";
import { ClienteCreateComponent } from "./components/cliente-create/cliente-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "primer",
    component: PrimerCrudComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "cliente/delete/:id",
    component: ClienteDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
