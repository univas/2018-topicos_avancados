import { Department } from "./department";

export class Employee {

    id : number;

    name : string;

    cpf : string;

    email : string;

    department : Department;

    constructor(id?: number, name?: string, cpf?: string,
                email?: string, department?: Department) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.department = department;
    }

}