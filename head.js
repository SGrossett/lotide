// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed:S ${actual} !== ${expected}`);
  }
};

//FUNCTION WHICH RETURNS THE FIRST ITEM IN THE ARRAY
const head = (arr) => {
  return arr[0];
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(head([5,6,7]));
console.log(head(["Hello", "Lighthouse", "Labs"]));