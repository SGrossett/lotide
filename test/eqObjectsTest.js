const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let result1 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
let result2 = eqObjects(cd, cd2); // => false

//console.log(assertEqual(result1, true));
//console.log(assertEqual(result2, false));

describe('#countLetters', () => {
  it('it should return true for result1["s"]', () => {
    assert.strictEqual(result1, true);
  });

  it('it should return false for result1["e"]', () => {
    assert.strictEqual(result2, false);
  });
});