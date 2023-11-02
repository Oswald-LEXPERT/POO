'use strict'


class user {
    firstName;
    lastName;
    // constructor(fname, lname) {
    //     this.firstName = fname;
    //     this.lastName = lname;
    //     console.log(`identité de l'utilisateur: ${this.fname} ${this.lname}`);
    // }

    fullname(){
        this.firstName = firstName;
        this.lastName = lastName;
        return `On m'appelle ${this.firstName} ${this.lastName}`;
    }
    
}


class Admin extends user {

    constructor(){
        super(firstName, lastName);        
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    canEditArticles(){
        return "true"
    }
}


let crac = new user("Damien", "Leboeuf")
crac.fullname()
console.log(crac);