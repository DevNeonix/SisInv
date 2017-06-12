import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('wrapper').style.paddingLeft='30px';
  }
  mouseEnter(){
      $("#wrapper").css('padding-left', '225px');
   }

   mouseLeave(){
     $("#wrapper").css('padding-left', '30px');
   }
}
