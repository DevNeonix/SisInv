import { Component, OnInit } from '@angular/core';
import { ClientesService } from "app/services/clientes.service";
declare var $;
@Component({
  selector: 'app-clientes',
  template: `
    <h3>Clientes</h3>

    <div class="container">
      <div class="row">
        <div class="col-xs-8">
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">Search</span>
                <input type="text" class="form-control" aria-describedby="basic-addon1" [(ngModel)]="filtro" (keyup)="busqueda()" id="focus">
             </div>
        </div>
        <div class="col-xs-4">
            <a routerLink="registro" class="btn btn-primary">Nvo Cliente</a>
        </div>
    </div>
    <br/>
      <table class="table table-hover table-responsive ">
      <thead>
        <tr class="btn-primary">
          <th>#</th>
          <th>Razon Social</th>
          <th>Ruc</th>
          <th>Direccion</th>
          <th>Departamento</th>
          <th>Provincia</th>
          <th>Distrito</th>
          <th>Telefono</th>
          <th>Condicion</th>
          <th>Vendedor</th>
          <th>Verificado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="info" *ngFor="let item of clientes">
          <td><small>{{item.id}}</small></td>
          <td><small>{{item.razon_social}}</small></td>
          <td><small>{{item.ruc}}</small></td>
          <td><small>{{item.direccion}}</small></td>
          <td><small>{{item.departamento}}</small></td>
          <td><small>{{item.provincia}}</small></td>
          <td><small>{{item.distrito}}</small></td>
          <td><small>{{item.telefono}}</small></td>
          <td><small>{{item.condicion}}</small></td>
          <td><small>{{item.nombre + " " + item.apellido}}</small></td>
          <td><small>{{item.verificado}}</small></td>
        </tr>
      </tbody>
    </table> 
    </div>

  `,
  styles: [],
  providers:[ClientesService]
})
export class ClientesComponent implements OnInit {
  clientes;
  filtro:string="";
  constructor(public clientesService:ClientesService) {
    
  }

  ngOnInit() {

    this.getAll()
    $("#focus").focus();
  }
  getAll(){
    this.clientesService.getAll(this.filtro).subscribe(
      res=>{
        this.clientes=res.data;
      },
      error=>{
        console.log(error)
      }
    );
  }
  busqueda(){
    this.getAll();
  }
}
