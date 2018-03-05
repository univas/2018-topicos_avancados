import { Component } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS_MOCK } from './alunos-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UNIVAS';

  alunos = ALUNOS_MOCK;

  currentAluno : Aluno;

  constructor() {
  }

  setSelectedAluno(aluno: Aluno) {
    this.currentAluno = aluno;
  }


}
