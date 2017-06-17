import { Component, OnInit } from '@angular/core';
import { ProductosService } from "app/services/productos.service";

@Component({
  selector: 'app-productos',
  template: `
    
<h3>Productos</h3>
<div class="container">
    <div class="row">
        <div class="col-xs-8">
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">Search</span>
                <input type="text" class="form-control" aria-describedby="basic-addon1">
             </div>
        </div>
        <div class="col-xs-4">
            <a routerLink="registro" class="btn btn-primary">Nvo Producto</a>
        </div>
    </div>
</div>
<br>
<div class="container">
  <table class="table table-hover table-responsive ">
  <thead>
    <tr class="btn-primary">
      <th>#</th>
      <th>Nombre</th>
      <th>Nombre Técnico</th>
      <th>descripcion</th>
      <th>Categoria</th>
      <th>Medida</th>
      <th>venta.en</th>
      <th>P.Compra</th>
      <th>P.Normal</th>
      <th>P.Promo</th>
      <th>Imagen</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr class="info" *ngFor="let prod of products">
      <td><small>{{prod.id}}</small></td>
      <td><small>{{prod.nombre}}</small></td>
      <td><small>{{prod.nombre_tecnico}}</small></td>
      <td><small>{{prod.descripcion}}</small></td>
      <td><small>{{prod.categoria}}</small></td>
      <td><small>{{prod.cantidad_medida +" "+ prod.tipo_medida}}</small></td>
      <td><small>{{prod.unidades_venta}}</small></td>
      <td><small>{{prod.precio_compra}}</small></td>
      <td><small>{{prod.precio_normal}}</small></td>
      <td><small>{{prod.precio_promocion}}</small></td>
      
      <td>
          <img src="{{prod.url_imagen}}" alt="" class="img img-circle img-responsive img-zoom" style="width:30px;height:30px">
      </td>
      <td>
          <div class="row">
                <div class="col-xs-5">
                    <button class="btn btn-primary" (click)="edit(prod)">
                        <i class="fa fa-pencil"></i>
                    </button>
          </div>
                <div class="col-xs-7">
                    <button class="btn btn-danger" *ngIf="prod.estado == 1">
                        <i class="fa fa-thumbs-down"></i>
                    </button>
                    <button class="btn btn-danger" *ngIf="prod.estado == 0">
                        <i class="fa fa-thumbs-up"></i>
                    </button>
                </div>
          </div>
      </td>
    </tr>
  </tbody>
</table> 
</div>

  `,
  styles: [`
    .img-zoom{
      position:relative;
      z-index:10;
    }
    .img-zoom:hover{
      transform:scale(7)
    }
  `]
})
export class ProductosComponent implements OnInit {
products:any;
  constructor(
    public _ps:ProductosService
  ) { }

  ngOnInit() {
    this.getAllProducts();
    
  }
  getAllProducts(){
    this._ps.getAllProducts().subscribe(
      res=>{
        this.products=res.data;
      }
    );
  }

}
