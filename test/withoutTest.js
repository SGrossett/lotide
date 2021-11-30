const assert = require('chai').assert;
const without = require('../without');

let result1 = without([1, 2, 3], [1]); 
let result2 = without(["1", "2", "3"], [1, 2, "3"]);  


const words = ["hello", "world", "lighthouse"];
let result3 = without(words, ["lighthouse"]); 

describe('#without', () => {
  it('it should return [2, 3] for result1', () => {
    assert.deepEqual(result1, [2, 3]);
  });

  it('it should return [ "1", "2" ] for result2', () => {
    assert.deepEqual(result2, [ '1', '2' ]);
  });

  it('it should return [ "hello", "world" ] for result3', () => {
    assert.deepEqual(result3, [ 'hello', 'world' ]);
  });
});