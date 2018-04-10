import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { AppComponent } from './app.component';

const routes : Routes = [
  { path : 'alunos', component : AlunoComponent },
  { path : '', redirectTo : '/alunos', pathMatch : 'full' }
  
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
