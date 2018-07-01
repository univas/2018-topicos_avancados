import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { SelecaoComponent } from './selecao/selecao.component';

const routes : Routes = [
  { path : 'grupo', component : GrupoComponent },
  { path : 'selecao', component : SelecaoComponent }
];

@NgModule({
  exports : [
    RouterModule
  ],
  imports : [
    RouterModule.forRoot(routes)
  ]
})
export class RouteModule { }
