import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';

import {Routes,RouterModule} from '@angular/router'
const routes:Routes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:'../components/home/home.module#HomeModule',
    
  },
  {
    path:'clientes',
    loadChildren:'../components/clientes/clientes.module#ClientesModule'
  },
  {
    path:'productos',
    loadChildren:'../components/productos/productos.module#ProductosModule'
  },
  {
    path:'proveedores',
    loadChildren:'../components/proveedores/proveedores.module#ProveedoresModule'
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  declarations: [CoreComponent],
  exports:[CoreComponent]
})
export class CoreModule { }
