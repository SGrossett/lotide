const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
let result2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");

describe('#findKeyByValue', () => {
  it('it should return "drama" for result1', () => {
    assert.strictEqual(result1, "drama");
  });

  it('it should return undefined for result2', () => {
    assert.strictEqual(result2, undefined);
  });
});