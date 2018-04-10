import { Component, OnInit, Input } from '@angular/core';
import { ALUNOS_MOCK } from '../alunos-mock';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos = ALUNOS_MOCK;

  currentAluno : Aluno;

  newAluno : Aluno;
  
  constructor() {
    this.newAluno = new Aluno();
  }

  ngOnInit() {
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
