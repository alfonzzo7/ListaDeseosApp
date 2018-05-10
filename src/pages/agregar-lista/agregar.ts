import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarListaComponent implements OnInit {
  nombreLista:string;
  nombreItem:string;

  constructor() {  }

  ngOnInit() {}
}
