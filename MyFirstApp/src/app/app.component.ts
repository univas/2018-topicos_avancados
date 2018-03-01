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
    cpf : '12345678900',
    telefone : '11111111',
    email : 'RODRIGO@gmail.com',
    dataNascimento : new Date(),
    peso : 129.76
  };


}
