import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import {Routes,RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';
const routes:Routes=[
  {
    path:'',
    component:ProductosComponent
  }
]
@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [ProductosComponent,]
})
export class ProductosModule { }
