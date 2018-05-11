import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    console.log("Servicio Inicializado");

    let lista1 = new Lista("Compras");
    let lista2 = new Lista("Juegos");
    let lista3 = new Lista("Cosas Uni");

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

  }
}
