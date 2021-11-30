const without = function(arr, remove) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!remove.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
};

module.exports = without;
