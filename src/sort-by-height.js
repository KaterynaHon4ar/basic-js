const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexArr = [];
  let shouldBeSortedArr = [];
  arr.forEach((el, index) => {
    if(el === -1){
      indexArr.push(index);
    } else {
      shouldBeSortedArr.push(el);
    }
  })
  shouldBeSortedArr.sort((a,b) => a - b);
  indexArr.forEach(el => shouldBeSortedArr.splice(el, 0, -1));
  return shouldBeSortedArr;
}

module.exports = {
  sortByHeight
};
