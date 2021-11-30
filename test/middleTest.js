const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

middle([1, 2]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6]);

assertArraysEqual(eqArrays([1, 2, 3], [2, 3]), true); // => should PASS
