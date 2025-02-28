const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArray = Array.from(String(n));
  let biggerNumber = 0;
  numArray.forEach((el, index, array) => {
    let arrCopy = Array.from(array);
    arrCopy.splice(index,1);
    let iterationRes = arrCopy.join('');
    if (biggerNumber < iterationRes){
      biggerNumber = iterationRes;
    }
  })
  return Number(biggerNumber);
}

module.exports = {
  deleteDigit
};
