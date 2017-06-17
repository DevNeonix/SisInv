import { Injectable } from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UsuariosService {
  url="http://localhost/api_rest/index.php/api/login";
  constructor(public http:Http) { }

  login(data:any){
    let params=new URLSearchParams();
    params.set('email',data.email);
    params.set('password',data.password);
    return this.http.get(this.url,{search:params}).map(res=>res.json());
  }
}
