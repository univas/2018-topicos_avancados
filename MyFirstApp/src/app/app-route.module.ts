import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { AppComponent } from './app.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';

const routes : Routes = [
  { path : 'alunos', component : AlunoComponent },
  { path : '', redirectTo : '/alunos', pathMatch : 'full' },
  { path : 'aluno/:id', component : AlunoDetailComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouteModule { }
