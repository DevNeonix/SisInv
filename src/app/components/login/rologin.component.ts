import { Component, OnInit } from '@angular/core';
import { WardService } from "app/services/ward.service";

@Component({
  selector: 'app-rologin',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  providers:[WardService]
})
export class RologinComponent implements OnInit {

  constructor(ward:WardService) {
    ward;
  }

  ngOnInit() {
  }

}
