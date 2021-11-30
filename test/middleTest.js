const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(assertArraysEqual(eqArrays([1, 2, 3], [2, 3]), true)); // => should PASS
