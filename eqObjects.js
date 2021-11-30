const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objKeysArr1 = Object.keys(object1);
  let objKeysArr2 = Object.keys(object2);
  
  if (objKeysArr1.length !== objKeysArr2.length) return false;

  for (let value of objKeysArr1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else {
      if (object1[value] !== object2[value]) return false;
    }
  }
};

module.exports = eqObjects;