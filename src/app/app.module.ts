import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from "app/core/core.module";
import { CoreComponent } from "app/core/core.component";
import { ProductService } from "app/services/productos.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { CategoriasService } from "app/services/categorias.service";




@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService,CategoriasService],
  bootstrap: [CoreComponent]
})
export class AppModule { }
