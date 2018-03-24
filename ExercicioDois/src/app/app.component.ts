import { Component } from '@angular/core';
import { Carta } from './carta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newCarta: Carta = new Carta();
  cartas: Carta[] = [];

  constructor() {

  }

  addNewCarta() {
    let carta = new Carta(
      this.newCarta.remetente,
      this.newCarta.enderecoRemetente,
      this.newCarta.cepRemetente,
      this.newCarta.destinatario,
      this.newCarta.enderecoDestinatario,
      this.newCarta.cepDestinatario,
      this.newCarta.content
    )

    this.cartas.push(carta);
    this.newCarta = new Carta();
  }

}
