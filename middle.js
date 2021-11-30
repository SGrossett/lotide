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

module.exports = middle;