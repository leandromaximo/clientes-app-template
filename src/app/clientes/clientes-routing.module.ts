import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  {path : 'clientes', component : LayoutComponent, children: [
      {path: 'form', component: ClientsFormComponent},
      {path: 'form/:id', component: ClientsFormComponent},
      {path: 'lista', component: ClientesListaComponent},
      {path: '', redirectTo: '/clientes/lista', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
