'use strict'

 export class Person  {
    constructor(name, age){
        this.name = name ;
        this.age = age;
        console.log(`appel du constructeur. Création de la Person ${this.name}`);
    }

    Presente(){
        console.log(
          `  On m'appelle ${this.name} j'ai ${this.age} ans`
        );
    }
}

