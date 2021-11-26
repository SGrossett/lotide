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

const takeUntil = function(array, callback) {
  let results = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) results = array.slice(0, i);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);