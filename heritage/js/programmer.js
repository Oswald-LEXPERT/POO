'use strict'
import { Employee } from "./Employee.js";

export class Programmer extends Employee {
    constructor (name, age, salary, language){
       super(name, age, salary);
       this.language = language;
       console.log(` ${this.name} crée avec succès`);

    }
}
