const assertEqual = (actual, expected) => {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
};

const countLetters = (str) => {
  let letters = str.split('');
  let count = {};

  for (let letter of letters) {
    count.hasOwnProperty(letter) ? count[letter] += 1 : count[letter] = 1;
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));