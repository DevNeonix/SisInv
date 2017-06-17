import { Injectable } from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UbicacionesService {

  constructor(public http:Http) { }
  getDepartamentos(){
    return this.http.get("http://localhost/api_rest/index.php/api/departamentos").map(res=>res.json());
  }
  getProvincias(id){
    let params=new URLSearchParams();
    params.set('depa',id)
    return this.http.get("http://localhost/api_rest/index.php/api/provincias",{search:params}).map(res=>res.json());
  }
  
  getDistritos(id){
    let params=new URLSearchParams();
    params.set('prov',id)
    return this.http.get("http://localhost/api_rest/index.php/api/distritos",{search:params}).map(res=>res.json());
  }
}
