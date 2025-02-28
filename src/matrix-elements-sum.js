const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arrayAmount = matrix[0].length;
  let elementAmount = matrix.length;
  let resultArr = Array.from({ length: arrayAmount }, () => []);
  for (let col = 0; col < arrayAmount; col++) {
    for (let row = 0; row < elementAmount; row++) {
      if (matrix[row][col] === 0) {
        break;
      }
      resultArr[col].push(matrix[row][col]);
    }
  }
  return resultArr
      .flat()
      .reduce((acc, num) => acc + num, 0);
}

module.exports = {
  getMatrixElementsSum
};
