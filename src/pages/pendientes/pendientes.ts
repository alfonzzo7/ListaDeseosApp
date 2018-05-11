import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarListaComponent } from '../agregar-lista/agregar';
import { DetalleComponent } from '../detalle/detalle';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseosService,
              private _navController:NavController) {  }

  ngOnInit() {}

  irAgregar(){
    this._navController.push(AgregarListaComponent);
  }

  verDetalle(lista, index){
    this._navController.push(DetalleComponent, {lista,index});
  }
}
