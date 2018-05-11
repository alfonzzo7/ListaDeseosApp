import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { Lista, ListaItem} from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarListaComponent implements OnInit {
  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(
    public navCtrl:NavController,
    public alertCtrl:AlertController,
    public _listaDeseos:ListaDeseosService
  ) {  }

  ngOnInit() {}

  agregarItem(){
    if(this.nombreItem.length <= 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";
  }

  borrarItem(index:number){
    this.items.splice(index, 1);
  }

  guardarLista(){
    if(this.nombreLista.length <= 0){
      this.showAlert("Nombre de la lista", "El nombre de la lista es necesario", ["OK"]);
      return;
    }else{
      let lista = new Lista(this.nombreLista);
      lista.items = this.items;
      this._listaDeseos.listas.push(lista);
      this.navCtrl.pop();
    }
  }

  showAlert(titulo:string, msg:string, btnText:string[]) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: msg,
      buttons: btnText
    });
    alert.present();
  }
}
