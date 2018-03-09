import { Component, OnInit, Input } from '@angular/core';
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

  newAluno : Aluno;

  constructor() {
    this.newAluno = new Aluno();
  }

  setSelectedAluno(aluno: Aluno) {
    this.currentAluno = aluno;
  }

  saveAluno() {
    console.log(this.newAluno.nome);
    console.log(this.newAluno.email);
    console.log(this.newAluno.cpf);
    console.log(this.newAluno.telefone);
    console.log(this.newAluno.dataNascimento);
    console.log(this.newAluno.peso);

    let alunoToSave = new Aluno();
    alunoToSave.nome = this.newAluno.nome;
    alunoToSave.email = this.newAluno.email;
    alunoToSave.cpf = this.newAluno.cpf;
    alunoToSave.telefone = this.newAluno.telefone;
    alunoToSave.dataNascimento = this.newAluno.dataNascimento;
    alunoToSave.peso = this.newAluno.peso;

    this.alunos.push(alunoToSave);
  }


}
