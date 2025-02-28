const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let initialValue = [];
  return arr.reduce((accumulator, currentValue, index) => {
    if((currentValue === '--discard-next' || currentValue === '--double-next') && index === arr.length-1){
      return accumulator;
    }
    if(accumulator[accumulator.length-1] === '--discard-next'){
      accumulator.pop();
      accumulator.push(undefined);
      return accumulator;
    }
    if(currentValue === '--discard-prev'){
      if(accumulator[accumulator.length-1]){
        accumulator.pop();
      }
      return accumulator;
    }
    if(accumulator[accumulator.length-1] === '--double-next'){
      accumulator.pop();
      accumulator.push(currentValue);
    }
    if(currentValue === '--double-prev'){
      if(accumulator[accumulator.length-1]){
        accumulator.push(accumulator[accumulator.length-1]);
      }
      return accumulator;
    }
    accumulator.push(currentValue);
    return accumulator;
  }, initialValue).filter((el) => el);
}

module.exports = {
  transform
};
