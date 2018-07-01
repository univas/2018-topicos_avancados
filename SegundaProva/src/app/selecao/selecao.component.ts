import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Group } from '../group';
import { TeamService } from '../team.service';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  newTeam : Team;

  teams : Team[];

  groups : Group[];

  showMessageError1 : boolean;

  showMessageError2 : boolean;

  constructor(private teamService : TeamService,
            private groupService : GroupService) { }

  ngOnInit() {
    this.newTeam = new Team();
    this.loadTeams();
    this.loadGroups();
  }

  saveTeam() {
    if (this.allFieldsValid()) {
      if (!this.newTeam.id) {
        this.newTeam.id = (new Date()).getTime();
        this.teamService.addTeam(this.newTeam);
      } else {
        this.teamService.updateTeam(this.newTeam);
      }

      this.newTeam = new Team();
    }
  }

  allFieldsValid() {
    this.showMessageError1 = false;
    this.showMessageError2 = false;

    if (!this.newTeam.name || this.newTeam.name.trim() == '') {
      this.showMessageError1 = true;
    } 
    
    if (!this.newTeam.group) {
      this.showMessageError2 = true;
    }

    return !this.showMessageError1 && !this.showMessageError2;
  }
  
  loadTeams() {
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams
    );
  }

  loadGroups() {
    this.groupService.getGroups().subscribe(
      groups => this.groups = groups
    );
  }

  editTeam(team : Team) {
    this.newTeam = new Team(team.id, team.name, team.group);
  }

  deleteTeam(team : Team) {
    this.teamService.deleteTeam(team);
    this.loadTeams();
  }



}
