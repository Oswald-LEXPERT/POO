'use strict'

import { Person } from "./person.js";

// Employee étend (hérite des propriétés et méthodes) de Person 

/**On dit désormais que Employee hérite de Person
 * On dit égelament que Employee est un enfant de Person
 * On dit également que Person est un Parent de Emplayee
 */
export class Employee extends Person  {
     // Appelle du constructeur du parent avec deux arguments
     
     constructor(name, age, salary){
        super(name, age)
        this.salary = salary;
        console.log(`${this.name} crée avec succès`);

    }
}

        