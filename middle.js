const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
  }
};

const middle = (arr) => {
  let newArr = [];
  let middleIndex = 0;

  if (arr.length <= 2) return newArr;
  if (arr.length % 2 === 1) {
    middleIndex = Math.floor(arr.length / 2);
    newArr.push(arr[middleIndex]);
  } else {
    middleIndex = arr.length / 2;
    newArr.push(arr[middleIndex - 1], arr[middleIndex]);
  }
  return newArr;
};

console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

//console.log(assertArraysEqual(eqArrays([1, 2, 3], [2, 3]), true)); // => should PASS