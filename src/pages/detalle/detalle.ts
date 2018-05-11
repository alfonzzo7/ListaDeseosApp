import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.html',
})
export class DetalleComponent implements OnInit {

  index:number;
  lista:any;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              public alertCtrl:AlertController,
              public _listaDeseos:ListaDeseosService) {
                this.index = navParams.get("index");
                this.lista = navParams.get("lista");
              }

  ngOnInit() {}

  actualizarEstadoItem(item:ListaItem){
    item.completado = !item.completado;

    let listaCompletada = true;
    for(let item of this.lista.items){
      if(!item.completado){
        listaCompletada = false;
        break;
      }
    }
    this.lista.completada = listaCompletada;
    this._listaDeseos.actualizarData();
  }

  borrarLista(){
    let confirm = this.alertCtrl.create({
    title: this.lista.nombre,
    message: '¿Esta seguro que desea borrar la lista?',
    buttons: ['Cancelar',
      {
        text: 'Borrar',
        handler: () => {
          this._listaDeseos.borrarLista(this.index);
          this.navCtrl.pop();
        }
      }
    ]
  });
  confirm.present();
  }
}
