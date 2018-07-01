import { Injectable } from '@angular/core';
import { Group } from './group';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GroupService {

  private groups : Group[] = [];

  constructor() { }

  getGroups() : Observable<Group[]> {
    return of(this.groups);
  }

  addGroup(group : Group) {
    this.groups.push(group);
  }

  updateGroup(group: Group) {
    let existGroup = this.groups.find(grp => grp.id == group.id);
    existGroup.name = group.name;
  }

  deleteGroup(group: Group) {
    let index = this.groups.indexOf(group);
    this.groups.splice(index, 1);
  }
}
