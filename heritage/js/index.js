'use strict'

import {Person} from './person.js';
import {Employee} from './Employee.js';
import {Programmer} from './programmer.js';

let pe1 = new Person("Thierry", 23);
pe1.Presente(); // On m'appele Thierry j'ai 23 ans
console.log(pe1); // {name: 'Thierry', age: 23}

let el = new Employee('Jacques', 54, 5000000);
el.Presente(); // On m'appele Jacques j'ai 54 ans
console.log(el); // {name: 'Jacques', age: 54, salary: 5000000}

let Emile = new Programmer ('Emile', 45, 5000000, ["HTML", "CSS", "JS"])
Emile.Presente();  // On m'appele Emile j'ai 45 ans
console.log(Emile); // {name: 'Emile', age: 45, salary: 5000000, language:["HTML", "CSS", "JS"] }