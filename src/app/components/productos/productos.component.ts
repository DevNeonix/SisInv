import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ProductService } from "../../services/productos.service";
import { CategoriasService } from "app/services/categorias.service";

declare var $;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers:[ProductService,CategoriasService]
})
export class ProductosComponent implements OnInit {
  products:any;
  editprod={"id":"1","nombre":"prueba 1","nombre_tecnico":"este es el nombre tecnico del producto de prueba 1","descripcion":"decripcion del producto de prueba 1","tipo_medida":"gramos - capsulas","cantidad_medida":"100","unidades_venta":"1","id_sub_categoria":"1","precio_compra":"10","precio_normal":"12","precio_promocion":"11.5","detalle_promocion":"2+1","url_imagen":"http:\/\/localhost\/api_rest\/public\/productos\/S10_1678.jpg","estado":"1","categoria":"sub-categoria1"};
  subcategorias:any;
  proUpdate={id:"",nombre:"",nombre_tecnico:"",descripcion:"",categoria:"",precio_compra:0,precio_normal:0,precio_promocion:0,cantidad_medida:0,tipo_medida:"",unidades_venta:"",url_imagen:""};
  constructor(public title:Title,
              public _ps:ProductService,
              public CategoriaService:CategoriasService) { }

  ngOnInit() {
    this.title.setTitle("Productos");
    this.getAllProducts();
    this.getAllSubCategorias();
  }
  getAllProducts(){
    this._ps.getAllProducts().subscribe(
      res=>{
        this.products=res.data;
      }
    );
  }
  getAllSubCategorias(){
    this.CategoriaService.getAll().subscribe(
      res=>{
        this.subcategorias=res.data;
      },
      error=>{
        console.error(error)
      }
    );
  }
  edit(prod){
    let paneles=$('#panel-edit').fadeIn();
  }
  closePanel(){
    let paneles=$('#panel-edit').fadeOut();
  }
}
