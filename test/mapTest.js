const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, word => word[0]);
const result2 = map(words, word => word[1]);
const result3 = map(words, word => word[2]);
const result4 = map(words, word => word[3]);


describe('#map', () => {
  it('it should return [ "g", "c", "t", "m", "t" ] for result1', () => {
    assert.deepEqual(result1, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it('it should return [ "r", "o", "o", "a", "a" ] for result2', () => {
    assert.deepEqual(result2, [ 'r', 'o', 'o', 'a', 'o' ]);
  });

  it('it should return [ "o", "n", "undefined", "j", "m" ] for result3', () => {
    assert.deepEqual(result3, [ 'o', 'n', undefined, 'j', 'm' ]);
  });

  it('it should return [ "u", "t", "undefined", "o", "undefined" ] for result4', () => {
    assert.deepEqual(result4, [ 'u', 't', undefined, 'o', undefined ]);
  });
});
