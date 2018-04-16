import { Component, OnInit, Input } from '@angular/core';
import { ALUNOS_MOCK } from '../alunos-mock';
import { Aluno } from '../aluno';
import { FetchAlunosService } from '../fetch-alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos : Aluno[];

  newAluno : Aluno;
  
  constructor(private alunosService : FetchAlunosService) {
    this.newAluno = new Aluno();
  }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this.alunosService.getAlunos().subscribe(
      alunos_server => this.alunos = alunos_server
    );
  }

  saveAluno() {
    let alunoToSave = new Aluno();
    alunoToSave.id = (new Date()).getTime();
    alunoToSave.nome = this.newAluno.nome;
    alunoToSave.email = this.newAluno.email;
    alunoToSave.cpf = this.newAluno.cpf;
    alunoToSave.telefone = this.newAluno.telefone;
    alunoToSave.dataNascimento = this.newAluno.dataNascimento;
    alunoToSave.peso = this.newAluno.peso;

    this.alunos.push(alunoToSave);
    this.newAluno = new Aluno();
  }

}
