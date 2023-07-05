'use strict'
import { z as scriptA } from './script-a.js'

let y = 10;
let z = 20 + scriptA

console.log(scriptA);
console.log(z);