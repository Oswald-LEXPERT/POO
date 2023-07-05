'use strict'
import { Employee } from "./Employee.js";

export class Programmer extends Employee {
    #language;
    constructor (name, age, salary, language){
       super(name, age, salary);
       this.#language = language;
       console.log(` ${this.name} crée avec succès`);

    };

    // accesseur | getteur : Récuperer la donnée ;
    get language(){
        return this.#language 
    }

     // mutateur | setteur : Modifier la donnée ;
    set language(newlanguage){
        this.#language = newlanguage;
    }
}
