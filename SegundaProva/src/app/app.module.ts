import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteModule } from './/route.module';

import { AppComponent } from './app.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { GroupService } from './group.service';
import { TeamService } from './team.service';


@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    SelecaoComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule
  ],
  providers: [GroupService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
