// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual[0]} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:S ${actual}${[0]} !== ${expected}`);
  }
};

//FUNCTION WHICH RETURNS THE FIRST ITEM IN THE ARRAY
const head = (arr) => {
  return arr[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log(head([5,6,7]));
console.log(head(["Hello", "Lighthouse", "Labs"]));

