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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objKeysArr1 = Object.keys(object1);
  let objKeysArr2 = Object.keys(object2); 
  
  if (objKeysArr1.length !== objKeysArr2.length) return false;

  for (let value of objKeysArr1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value])
    } else { 
      if (object1[value] !== object2[value]) return false;
    }
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false