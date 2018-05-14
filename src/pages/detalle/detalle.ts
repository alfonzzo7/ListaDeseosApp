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
  lista:Lista;
  // nombreItem:string = "";

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

  agregarItem(){
    let prompt = this.alertCtrl.create({
      title: 'Agregar Item',
      message: "Introduzca el nombre del item que desea agregar",
      inputs: [
        {
          name: 'nombreItem',
          placeholder: 'Nombre Item'
        },
      ],
      buttons: ['Cancelar',
        {
          text: 'Guardar',
          handler: data => {
            let item = new ListaItem();
            item.nombre = data.nombreItem;
            this.lista.items.push(item);
            this._listaDeseos.actualizarData();
          }
        }
      ]
    });
    prompt.present();
  }

  borrarItem(index:number, nombreItem:string){
    let confirm = this.alertCtrl.create({
    title: nombreItem,
    message: '¿Esta seguro que desea borrar el item?',
    buttons: ['Cancelar',
      {
        text: 'Borrar',
        handler: () => {
          this.lista.items.splice(index, 1);
          this._listaDeseos.actualizarData();
        }
      }
    ]
  });
  confirm.present();
  }

  modificarItem(index:number, nombreItem:string){
    let prompt = this.alertCtrl.create({
      title: 'Editar Item',
      message: "Introduzca el nuevo nombre del item",
      inputs: [
        {
          name: 'nuevoNombreItem',
          placeholder: nombreItem
        },
      ],
      buttons: ['Cancelar',
        {
          text: 'Guardar',
          handler: data => {
            this.lista.items[index].nombre = data.nuevoNombreItem;
            this._listaDeseos.actualizarData();
          }
        }
      ]
    });
    prompt.present();
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
