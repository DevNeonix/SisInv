import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores.component';
import {Routes,RouterModule} from '@angular/router'
const routes:Routes=[
  {
    path:'',
    component:ProveedoresComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ProveedoresComponent]
})
export class ProveedoresModule { }
