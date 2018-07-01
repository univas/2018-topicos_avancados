import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TeamService {

  private teams : Team[] = [];

  constructor() { }

  getTeams() : Observable<Team[]> {
    return of(this.teams);
  }

  addTeam(team : Team) {
    this.teams.push(team);
  }

  updateTeam(team : Team) {
    let existTeam = this.teams.find(
      emp => emp.id == team.id
    );
    existTeam.name = team.name;
    existTeam.group = team.group;
  }

  deleteTeam(team : Team) {
    let index = this.teams.indexOf(team);
    this.teams.splice(index, 1);
  }
}
