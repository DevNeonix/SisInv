import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriasService {
    constructor(private http: Http) { }
    getAll(){
        return this.http.get("http://localhost/api_rest/index.php/api/subcategorias").
                    map(
                        res=>res.json()
                    );
    }

}