const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let additionalString;
  let mainString = String(str);

  if(addition !== undefined){
    if(!additionSeparator){
      additionSeparator = '|';
    }
    additionalString = makeString(addition, additionRepeatTimes, additionSeparator);
  }

  if(!separator){
    separator = '+';
  }

  if(additionalString){
    mainString = mainString.concat(additionalString);
  }

  return makeString(mainString, repeatTimes, separator);

  function makeString(string, repeatTimes, separator){
    if(!repeatTimes){
      return String(string);
    }

    return Array.from({length: repeatTimes}).fill(String(string)).join(separator);
  }

}

module.exports = {
  repeater
};
