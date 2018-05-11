import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    this.cargarData();
  }

  actualizarData(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  cargarData(){
    let data = localStorage.getItem("data");
    if(data){
      this.listas = JSON.parse(data);
    }
  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  borrarLista(index:number){
    this.listas.splice(index,1);
    this.actualizarData();
  }
}
