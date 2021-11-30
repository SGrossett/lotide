const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ',');

describe('#takeUntil', () => {
  it('it should return [ 1, 2, 5, 7, 2 ] for result1', () => {
    assert.deepEqual(result1, [ 1, 2, 5, 7, 2 ]);
  });

  it('it should return [ "I\'ve", "been", "to", "Hollywod" ] for result2', () => {
    assert.deepEqual(result2, [ "I've", 'been', 'to', 'Hollywood' ]);
  });
});