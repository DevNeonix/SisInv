import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ProductosService {
    constructor(private http: Http) { }
    getAllProducts(){
        return this.http.get("http://localhost/api_rest/index.php/api/productos").map(res=>res.json());
    }
}