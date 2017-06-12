import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(public titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Clientes"); 
  }

}
