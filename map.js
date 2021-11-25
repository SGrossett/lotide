const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : 
    `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);


const results2 = map(words, word => word[1]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);

const results3 = map(words, word => word[2]);
assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ]);

const results4 = map(words, word => word[3]);
assertArraysEqual(results4, [ 'u', 't', undefined, 'o', undefined ]);


