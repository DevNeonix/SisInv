import { Component, OnInit } from '@angular/core';
import { WardService } from "app/services/ward.service";
declare var $;
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
  providers:[WardService]
})
export class SystemComponent implements OnInit {
  account:Array<string>;
  constructor(public ward:WardService) {
    this.ward;
    this.account=JSON.parse(localStorage.getItem("account"));
    console.log(this.account);
  }

  ngOnInit() {
    document.getElementById('wrapper').style.paddingLeft='30px';
  }
  mouseEnter(){
      $("#wrapper").css('padding-left', '225px');
   }

   mouseLeave(){
     $("#wrapper").css('padding-left', '30px');
   }
   logOut(){
    this.ward.CerrarSesion();
    this.ward;
   }
}
