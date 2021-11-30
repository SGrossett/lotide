const assert = require('chai').assert;
const middle = require("../middle");

describe('#middle', () => {
  it('it should return an empty array [] for [1, 2]', () => {
    assert.deepEqual(tail([1, 2], []));
  });

  it('it should return [ 3 ] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5], [ 3 ]));
  });
  
  it('it should return [ 3, 4 ] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6], [ 3, 4 ]));
  });
})
