const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : 
    `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
};

const findKey = (obj, callback) => {
  let objKeysArr = Object.keys(obj);  
  
  for (let i = 0; i < objKeysArr.length; i++) {
    if (callback(obj[objKeysArr[i]])) return objKeysArr[i];
  }
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5)

assertEqual(result1, "noma");
assertEqual(result2, undefined);