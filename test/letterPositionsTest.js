const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

let result1 = letterPositions("lighthouse in the house");
let result2 = letterPositions("watching One Piece");
let result3 = letterPositions("still not sleeping");


describe('#letterPositons', () => {
  it('it should return [ 3, 5, 15, 18 ] for result1["h"]', () => {
    assert.deepEqual(result1["h"], [ 3, 5, 15, 18 ]);
  });

  it('it should return [ 1 ] for result2["a"]', () => {
    assert.deepEqual(result2["a"], [ 1 ]);
  });

  it('it should return [ 1, 8 ] for result3["t"]', () => {
    assert.deepEqual(result3["t"], [ 1, 8 ]);
  });
});
