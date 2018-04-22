import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';
import { FetchAlunosService } from '../fetch-alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  aluno : Aluno;

  constructor(private fetchAluno: FetchAlunosService,
            private route : ActivatedRoute,
            private location : Location) { }

  ngOnInit() {
    this.getAluno();
  }

  getAluno() {
    let alunoId = this.route.snapshot.paramMap.get('id');
    let id = parseInt(alunoId, 10);
    this.fetchAluno.getAlunoById(id).subscribe(
      aluno => this.aluno = aluno
    );
  }

  goBack() {
    this.location.back();
  }

}
