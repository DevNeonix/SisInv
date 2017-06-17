//importaciones de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
//servicios
import { CategoriasService } from "app/services/categorias.service";
import { ProductosService } from "app/services/productos.service";
//componentes
import {AppComponent} from './app.component';
import { LoginComponent } from './components/login/login.component';
//modulos
import {routes} from './app.routes';
import { SystemComponent } from './components/system/core/system.component';
import { HomeComponent } from './components/system/home.component';
import { ClientesComponent } from './components/system/clientes.component';
import { ProveedoresComponent } from './components/system/proveedores.component';
import { ProductosComponent } from './components/system/productos.component';
import { OlvidecontrasenaComponent } from './components/login/olvidecontrasena.component';
import { RologinComponent } from './components/login/rologin.component';
import { RegistroProductosComponent } from './components/system/proc/productos/registro-productos.component';
import { WardService } from "app/services/ward.service";
import { ClientesService } from "app/services/clientes.service";
import { RegistroClientesComponent } from './components/system/proc/clientes/registro-clientes.component';
import { UbicacionesService } from "app/services/ubicaciones.service";
import { CondicionesService } from "app/services/condiciones.service";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SystemComponent,
    HomeComponent,
    ClientesComponent,
    ProveedoresComponent,
    ProductosComponent,
    OlvidecontrasenaComponent,
    RologinComponent,
    RegistroProductosComponent,
    RegistroClientesComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductosService,
    CategoriasService,
    WardService,
    ClientesService,
    UbicacionesService,
    CondicionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
