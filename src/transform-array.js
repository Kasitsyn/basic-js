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
 * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
 * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
 * `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
 * `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
*/
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here



  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")

  if (arr.length === 0) return []

  let temp = [...arr]

  temp.forEach((elem, index) => {
    switch (elem) {
      case `--discard-next`:
        index === temp.length - 1 ? temp.splice(index, 1) : temp.splice(index, 2)
        break;
      case `--discard-prev`:
        index === 0 ? temp.splice(index, 1) : temp.splice(index - 1, 2)
        break;
      case `--double-next`:
        index === temp.length - 1 ? temp.splice(index, 1) : temp.splice(index, 1, temp[index + 1])
        
        break;
      case `--double-prev`:
        index === 0 ? temp.splice(index, 1) : temp.splice(index, 1, temp[index - 1])
        
        break;

      default:

        break;
    }
  })

  console.log(temp)
  return temp


}

transform(['--discard-next', 1, '--discard-prev', 2, 3, 4, 5])

module.exports = {
  transform
};
