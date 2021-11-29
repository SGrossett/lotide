const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");


const words = ["Yo Yo", "Lighthouse", "Labs"];
let results = tail(words); 
console.log(assertArraysEqual(results, ['Lighthouse', 'Labs'])); 