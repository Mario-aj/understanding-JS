/**
 * Write a function that takes an array as argument
 * It should return true if all elements in the array are equal
 * It should return false otherwise
 */

function EqualElements(array) {
  let first = array[0];
  return array.every((elem => elem === first));
};

console.log(EqualElements([true, true, true, true]));
console.log(EqualElements(['test', 'test', 'test']));
console.log(EqualElements([1,1,1,2]));
console.log(EqualElements(['10',10,10,10]));
