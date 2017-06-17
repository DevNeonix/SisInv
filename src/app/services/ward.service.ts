import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class WardService {

  constructor(public router:Router) { 
    let account=localStorage.getItem("account");
    if(account == null || account == undefined || account == ""){
      this.CerrarSesion();
    }else{
      //router.navigate(['../system']);
    }
  }
  CerrarSesion(){
    localStorage.removeItem("account");
    this.router.navigate(['../../login']);
  }
}
