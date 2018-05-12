import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { DetalleComponent } from '../detalle/detalle';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseosService,
              private _navController:NavController) {  }

  ngOnInit() {}

  verDetalle(lista, index){
    this._navController.push(DetalleComponent, {lista,index});
  }
}
