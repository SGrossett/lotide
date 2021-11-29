// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : 
    `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
};

module.exports = assertEqual;