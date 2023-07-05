'use strict'

 export class Person  {
     #name;
     #age;
    constructor(name, age){
        // propriété privée "#name" : Pas d'accès à la propriété hors de la classe
        this.#name = name ;
        // propriété privée "#age"
        this.#age = age;
        console.log(`appel du constructeur. Création de la Person ${this.name}`);
    }

    // accesseur | getteur : Récuperer la donnée ;
    get name(){
        return this.#name;
    }
    
    get age(){
        return this.#age;
    }
    
    // mutateur | setteur : Modifier la donnée ;
   set name(newName){
        this.#name = newName;
    }
   set age(newName){
        this.#age = newName;
    }

    Presente(){
        console.log(
          `  On m'appelle ${this.name} j'ai ${this.age} ans`
        );
    }
}

