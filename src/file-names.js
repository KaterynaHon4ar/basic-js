const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let objMemory = {};
  let renamedFiles = [];
  names.forEach((el) => {
    if (!objMemory.hasOwnProperty(el)){
      objMemory[el] = 0;
      renamedFiles.push(el);
    } else {
      objMemory[el]++;
      let newName = `${el}(${objMemory[el]})`;
      while (objMemory.hasOwnProperty(newName)) {
        objMemory[el]++;
        newName = `${el}(${objMemory[el]})`;
      }
      objMemory[newName] = 0;
      renamedFiles.push(newName);
    }
  })
  return renamedFiles;
}

module.exports = {
  renameFiles
};
