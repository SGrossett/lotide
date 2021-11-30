const assert = require('chai').assert;
const countLetters = require("../countLetters");

let result1 = countLetters("lighthouse in the house");
let result2 = countLetters("count the letters in this str");
let result3 = countLetters("Steven Universe is a great show");
let result4 = countLetters("I really should be sleeping right now");

describe('#countLetters', () => {
  it('it should return 2 for result1["s"]', () => {
    assert.deepEqual(countLetters(result1["s"], 2));
  });

  it('it should return 3 for result1["e"]', () => {
    assert.deepEqual(countLetters(result2["e"], 3));
  });
  
  it('it should return 3 for result1["s"]', () => {
    assert.deepEqual(countLetters(result3["s"], 3));
  });

  it('it should return 2 for result1["i"]', () => {
    assert.deepEqual(countLetters(result4["i"], 2));
  });
});


