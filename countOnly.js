const assertEqual = require("./assertEqual");

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

module.exports = countOnly;