const assertEqual = require('./assertEqual');

const countLetters = (str) => {
  let letters = str.split('');
  let count = {};

  for (let letter of letters) {
    count.hasOwnProperty(letter) ? count[letter] += 1 : count[letter] = 1;
  }
  return count;
}

module.exports = countLetters;
