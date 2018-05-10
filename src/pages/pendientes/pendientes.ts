import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarListaComponent } from '../agregar-lista/agregar';

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
}
