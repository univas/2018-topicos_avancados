import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS_MOCK } from './alunos-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class FetchAlunosService {

  constructor() { }

  getAlunos() : Observable<Aluno[]> {
    return of(ALUNOS_MOCK);
  }
  
}
