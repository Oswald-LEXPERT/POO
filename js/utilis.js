// 'use strict'

//importation de l'element par defaut du fichier Request
import Request from "./request.js";

// //importation de l'element du fichier request
// import { Request } from "./request.js";

export function dealWithForm() {
    const button = document.getElementById('button');
    
    button.addEventListener('click', (event)=>{
        event.preventDefault();
        let fname = document.getElementById('fname');
        let lname = document.getElementById('lname');

        let tabInput = [];
        tabInput.push(fname, lname);
    
      let request = new Request();
      request.getImputs(tabInput)
    })
  }