import { Routes} from '@angular/router';
import { LoginComponent } from "app/components/login/login.component";
import { SystemComponent } from 'app/components/system/core/system.component';
import { HomeComponent } from "app/components/system/home.component";
import { ProductosComponent } from "app/components/system/productos.component";
import { ProveedoresComponent } from "app/components/system/proveedores.component";
import { ClientesComponent } from "app/components/system/clientes.component";
import { OlvidecontrasenaComponent } from "app/components/login/olvidecontrasena.component";
import { RologinComponent } from "app/components/login/rologin.component";
import { RegistroProductosComponent } from "app/components/system/proc/productos/registro-productos.component";
import { RegistroClientesComponent } from "app/components/system/proc/clientes/registro-clientes.component";


export const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full' },
  
  { path: 'login', component:RologinComponent,children:[
      {
          path:'',
          component:LoginComponent
      }
      ,{
          path:'ovidemicontrasena',
          component:OlvidecontrasenaComponent
      }
  ]  },
  { 
      path: 'system', 
      component:SystemComponent,
      children:[
          {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
          },
          {
              path:'home',
              component:HomeComponent
          },
          {
              path:'clientes',
              component:ClientesComponent
          },
          {
              path:'clientes/registro',
              component:RegistroClientesComponent
          },
          {
              path:'proveedores',
              component:ProveedoresComponent
          },
          {
              path:'productos',
              component:ProductosComponent
          },
          {
              path:'productos/registro',
              component:RegistroProductosComponent
          },
      ]
  },
  { path: '**', redirectTo:'system'},
];
