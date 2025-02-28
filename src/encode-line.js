const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let currentLetter;
  let currentCount;
  str.split('').forEach((el) => {
    if (el !== currentLetter) {
      result += getEncodedLetter(currentLetter, currentCount);
      currentLetter = el;
      currentCount = 1;
    } else {
      currentCount++;
    }
  });
  return result + getEncodedLetter(currentLetter, currentCount);
}

function getEncodedLetter(letter, count) {
  return `${count === 1 ? '' : count ?? ''}${letter ?? ''}`
}

module.exports = {
  encodeLine
};
