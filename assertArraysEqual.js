const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = require('./eqArrays');

module.exports = assertArraysEqual;