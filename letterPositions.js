const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } return true;
};


const letterPositions = function(sentence) {
  let letters = sentence.split('');
  const results = {};

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== " ")
      results.hasOwnProperty(letters[i]) ? results[letters[i]].push(i) : results[letters[i]] = [i];
  }

  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);