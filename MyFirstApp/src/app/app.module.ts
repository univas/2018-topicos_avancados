import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CpfFilterPipe } from './cpf-filter.pipe';
import { TelefoneFilterPipe } from './telefone-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfFilterPipe,
    TelefoneFilterPipe,
    AlunoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
