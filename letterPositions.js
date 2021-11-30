const letterPositions = function(sentence) {
  let letters = sentence.split('');
  const results = {};

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== " ")
      results.hasOwnProperty(letters[i]) ? results[letters[i]].push(i) : results[letters[i]] = [i];
  }

  return results;
};

module.exports = letterPositions;