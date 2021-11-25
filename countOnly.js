const assertEqual = (actual, expected) => {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑 Assertion Failed:S ${actual} !== ${expected}`;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  let checkedNames = [];

  for (let name in itemsToCount) {
    if (itemsToCount[name]) checkedNames.push(name);
  }

  const namesToCheck = firstNames.filter(names => checkedNames.includes(names));

  for (let name of namesToCheck) {
    results.hasOwnProperty(name) ? results[name] += 1 : results[name] = 1;
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

(assertEqual(result1["Jason"], 1));
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);