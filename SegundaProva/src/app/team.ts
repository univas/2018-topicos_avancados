import { Group } from "./group";

export class Team {

    id : number;

    name : string;

    group : Group;

    constructor(id?: number, name?: string, group?: Group) {
        this.id = id;
        this.name = name;
        this.group = group;
    }

}