import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  newGroup : Group;

  groups : Group[];

  showMessageError : boolean;

  constructor(private groupService : GroupService) { }

  ngOnInit() {
    this.newGroup = new Group();
    this.showMessageError = false;
    this.loadGroups();
  }

  loadGroups() {
    this.groupService.getGroups().subscribe(
      groups => this.groups = groups
    );
  }

  saveGroup() {
    if (!this.newGroup.name || this.newGroup.name.trim() == '') {
      this.showMessageError = true;
    } else {
      this.showMessageError = false;
      if (!this.newGroup.id) {
        this.newGroup.id = (new Date()).getTime();
        this.groupService.addGroup(this.newGroup);
      } else {
        this.groupService.updateGroup(this.newGroup);
      }

      this.newGroup = new Group();
    }
  }

  deleteGroup(group : Group) {
    this.groupService.deleteGroup(group);
    this.loadGroups();
  }

  editGroup(group : Group) {
    this.newGroup = new Group(group.id, group.name);
  }



}
