import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ClientesService {

  constructor(public http:Http) { }
  getAll(filtro){
    let url="http://localhost/api_rest/index.php/api/clientes";
    let params=new URLSearchParams();
    params.set('filtro',filtro);
    return this.http.get(url,{search:params}).map(res=>res.json());
  }
}
