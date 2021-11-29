const assertEqual = require('./assertEqual');

const tail = (arr) => {
  let tails = arr.splice(1);
  return tails;
};

module.exports = tail;