import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from "app/services/usuarios.service";
import {NgForm} from '@angular/forms';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UsuariosService]
})
export class LoginComponent implements OnInit {
  showpassword=false;
  errorCuenta=false;
  constructor(
    public usuariosService:UsuariosService,
    public router:Router
  ) { }

  ngOnInit() {
  }
  onSubmit(frmlogin:NgForm){
    console.log(frmlogin.value);
    this.usuariosService.login(frmlogin.value).subscribe(
      res=>{
        console.log(res.data[0]);
        
        if(res.data[0]== undefined){
          this.errorCuenta=true;
        }else{
          localStorage.setItem('account',JSON.stringify(res.data));
          this.router.navigate(['../system']);
        }
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("complete!");
      }
    );
  }
  showPass(){
    if(this.showpassword==false){
      let showpass=$("#showpass").addClass("showpassword");
      $("#textpass").attr("type", "text");
      this.showpassword=true;
    }else{
      let showpass=$("#showpass").removeClass("showpassword");
      $("#textpass").attr("type", "password");
      this.showpassword=false;
    }
  }
}

