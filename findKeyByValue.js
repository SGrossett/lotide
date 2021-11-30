const findKeyByValue = (obj, value) => {
  if (Object.values(obj).includes(value)) {
    return Object.keys(obj).find(key => obj[key] === value);
  }
};

module.exports = findKeyByValue;