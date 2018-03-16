import { Component, OnInit, Input } from '@angular/core';
import { Candidato } from './candidato';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('name') inputElement : ElementRef;

  candidatos : Candidato[];
  newCandidato : Candidato;

  constructor() {
    this.newCandidato = new Candidato();
    this.candidatos = [];
  }

  saveCandidate() {
    let candidato = new Candidato(
      this.newCandidato.nome,
      this.newCandidato.partido,
      this.newCandidato.profissao);

    this.candidatos.push(candidato);
    this.newCandidato = new Candidato();
    this.inputElement.nativeElement.focus();
  }

  removeCandidate(candidato: Candidato) {
    let index = this.candidatos.indexOf(candidato);
    this.candidatos.splice(index, 1);
  }
  
}
