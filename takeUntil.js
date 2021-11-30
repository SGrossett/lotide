const takeUntil = function(array, callback) {
  let results = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) results = array.slice(0, i);
  }
  return results;
};

module.exports = takeUntil;