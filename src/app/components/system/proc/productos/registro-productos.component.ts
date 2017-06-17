import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-productos',
  template: `
    <p>
      registro-productos Works!
    </p>
    <a routerLink="../">Atrás</a>
  `,
  styles: []
})
export class RegistroProductosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
