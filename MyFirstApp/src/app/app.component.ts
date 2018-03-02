import { Component } from '@angular/core';
import { Aluno } from './aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UNIVAS';

  alunos : Aluno[];

  constructor() {
    this.alunos = [];

    for (let i = 0; i < 10; i++) {
      let aluno = new Aluno();
      aluno.nome = 'Rodrigo' + i;
      aluno.email = 'rodrigo@gmail.com';
      aluno.cpf = i + '234443338' + i;
      aluno.dataNascimento = new Date();
      aluno.peso = 34.64;
      aluno.telefone = '34561190';
      this.alunos.push(aluno);
    }
  }


}
