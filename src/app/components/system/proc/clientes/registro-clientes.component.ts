import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UbicacionesService } from "app/services/ubicaciones.service";
import { CondicionesService } from "app/services/condiciones.service";
declare var $;
@Component({
  selector: 'app-registro-clientes',
  template: `
    <h3>Registro de Clientes</h3>
    <div class="container">
              <form #frmRegistroCliente="ngForm" (ngSubmit)="onSubmit(frmRegistroCliente)">
                <div class="row">
                  <div class="col-xs-12">
                    <p>
                      <small>Razon Social o Nombre completo de Persona Natural</small>
                      <input type="text" class="form-control" name="razon_social" ngModel #razon_social="ngModel" required id="focus"/>
                    </p>
                    <div class="alert alert-danger" *ngIf="!razon_social.valid && razon_social.touched">
                      Campo Requerido
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <p>
                      <small>Ruc</small>
                      <input type="text" class="form-control"  name="ruc" ngModel  #ruc="ngModel" required maxlength="11"/>
                    </p>
                    <div class="alert alert-danger" *ngIf="!ruc.valid && ruc.touched">
                      Campo Requerido, Valido hasta 11 caracteres.
                    </div>
                  </div>
                  

                  <div class="col-xs-12">
                    <p>
                      <small>Direccion</small>
                      <input type="text" class="form-control"  name="direccion" ngModel required/>
                    </p>
                  </div>

                  <div class="col-xs-12">
                    <div class="row">
                      <div class="col-xs-4">
                        <p>
                          <small>Departamento</small>
                          <select class="form-control"  name="departamento" ngModel required (change)="cambioDepartamento($event)">
                            <option *ngFor="let dep of departamentos" value="{{dep.idDepa}}">{{dep.departamento}}</option>
                          </select>
                        </p>
                      </div>
                      <div class="col-xs-4">
                        <p>
                          <small>Provincia</small>
                          <select class="form-control"  name="provincias" ngModel required (change)="cambioProvincia($event)">
                            <option *ngFor="let prov of provincias" value="{{prov.idProv}}">{{prov.provincia}}</option>
                          </select>
                        </p>
                      </div>
                      <div class="col-xs-4">
                        <p>
                          <small>Distrito</small>
                          <select class="form-control"  name="distritos" ngModel required>
                            <option *ngFor="let dis of distritos" value="{{dis.idDist}}">{{dis.distrito}}</option>
                          </select>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="row">
                      <div class="col-xs-6">
                        <p>
                          <small>Telefono</small>
                          <input type="text" class="form-control"  name="telefono" ngModel required/>
                        </p>
                      </div>
                      <div class="col-xs-6">
                        <p>
                          <small>Condición</small>
                          <select class="form-control"  name="condicion" ngModel required>
                            <option *ngFor="let con of condiciones" value="{{con.id}}">{{con.detalle}}</option>
                          </select>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="row">
                      <div class="col-xs-6">
                        <p>
                          <small>Verficado</small>
                          <select class="form-control"  name="verificado" ngModel required>
                            <option value="1">Si</option>
                            <option value="0">No</option>
                          </select>
                        </p>
                      </div>
                      <div class="col-xs-6">
                        <p>
                          <small>Vendedor Designado</small>
                          <input type="text" class="form-control"  name="vendedor" ngModel required/>
                        </p>
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <button type="submit" class="btn btn-primary btn-block">Registrar</button>
                  </div>
                </div>
            </form>
    </div>
  `,
  styles: [],
  providers:[UbicacionesService]
})
export class RegistroClientesComponent implements OnInit {
  condiciones: any;
  distritos: any;
  provincias: any;
  departamentos;
  constructor(public ubicacionesService:UbicacionesService,public condicionesService:CondicionesService) {
    this.getAllDepartamentos();
    this.getAllCondiciones();
  }

  ngOnInit() {
    $("#focus").focus();
  }
  onSubmit(frm:NgForm){
    
  }
  getAllDepartamentos(){
    this.ubicacionesService.getDepartamentos().subscribe(
      res=>{
        this.departamentos=res.data;
      },
      error=>{
        console.log(error)
      }
    );
  }
  getAllCondiciones(){
    this.condicionesService.getAll().subscribe(
      res=>{
        this.condiciones=res.data;
      },
      error=>{
        console.log(error);
      }
    );
  }
  cambioDepartamento(data){
    let id=(data.srcElement.value);
    this.provincias=null;
    this.distritos=null;
    this.ubicacionesService.getProvincias(id).subscribe(
      res=>{
        
        this.provincias=res.data;
      },
      error=>{
        console.log(error)
      }
    );
  }
  cambioProvincia(data){
    let id=(data.srcElement.value);
    this.distritos=null;
    this.ubicacionesService.getDistritos(id).subscribe(
      res=>{
        
        this.distritos=res.data;
      },
      error=>{
        console.log(error)
      }
    );
  }
}
