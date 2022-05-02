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
 * => 
 * 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *  'STRINGPLUS00PLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS00PLUS**STRINGPLUS'
 */
function repeater(str, { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' }) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let repeatStr = `${String(str)}${String(addition)}`

  if (!repeatTimes && !additionRepeatTimes) return repeatStr

  if (repeatTimes) {
    for (let i = 1; i < repeatTimes; i++) {

      if (additionRepeatTimes) {

        for (let j = 1; j < additionRepeatTimes; j++) {
          repeatStr += `${String(additionSeparator)}${String(addition)}`
        }
      }

      repeatStr += `${String(separator)}${String(str)}${String(addition)}`

    }
  }

  if (additionRepeatTimes) {

    for (let j = 1; j < additionRepeatTimes; j++) {
      repeatStr += `${String(additionSeparator)}${String(addition)}`
    }
  }

  console.log(repeatStr)
  return repeatStr
}

repeater('STRING', {
  repeatTimes: 3,
})

module.exports = {
  repeater
};
