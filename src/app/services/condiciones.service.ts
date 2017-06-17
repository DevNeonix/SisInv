import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CondicionesService {

  constructor(public http:Http) { }
  getAll(){
    let url="http://localhost/api_rest/index.php/api/condiciones";
    return this.http.get(url).map(res=>res.json());
  }
}

