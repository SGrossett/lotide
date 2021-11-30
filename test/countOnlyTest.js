const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [ "Karl", "Salima ", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('it should return 1 for result1["Jason"]', () => {
    assert.deepEqual(countOnly(result1["Jason"]), 1);
  });

  it('it should return undefined for result1["Karima"]', () => {
    assert.deepEqual(countOnly(result1["Karima"]), undefined);
  });
  
  it('it should return 2 for result1["Fang"]', () => {
    assert.deepEqual(countOnly(result1["Fang"]), 2);
  });

  it('it should return undefined for result1["Agouhanna"]', () => {
    assert.deepEqual(countOnly(result1["Agouhanna"]), undefined);
  });
});