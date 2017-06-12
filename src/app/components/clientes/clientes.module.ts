import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';


import {Routes,RouterModule} from '@angular/router'
const routes:Routes=[
  {
    path:'',
    component:ClientesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientesComponent]
})
export class ClientesModule { }
