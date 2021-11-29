const assertArraysEqual = require('./assertArraysEqual');

const tail = (arr) => {
  let tails = arr.splice(1);
  return tails;
};

module.exports = tail;