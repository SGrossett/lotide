const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  let objKeysArr = Object.keys(obj);  
  
  for (let i = 0; i < objKeysArr.length; i++) {
    if (callback(obj[objKeysArr[i]])) return objKeysArr[i];
  }
};

module.exports = findKey;