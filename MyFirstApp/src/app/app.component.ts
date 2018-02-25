import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UNIVAS';

  aluno = {
    nome : 'Rodrigo',
    cpf : '111.111.111-11',
    telefone : '1111-1111',
    email : 'RODRIGO@gmail.com',
    dataNascimento : '22/02/2018'
  };


}
