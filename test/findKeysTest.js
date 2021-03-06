const assert = require('chai').assert;
const findKey = require('../findKey');

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

describe('#findKey', () => {
  it('it should return "noma" for result1', () => {
    assert.strictEqual(result1, "noma");
  });

  it('it should return undefined for result2', () => {
    assert.strictEqual(result2, undefined);
  });
});