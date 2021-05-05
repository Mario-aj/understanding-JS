/**
 * Write a function that takes arguments an arbitrary number of arrays
 * It should return an array containing the values of all arrays
 */

function mergeArray(...arrays) {
  let array = [];
  return array.concat(...arrays);
};


console.log(mergeArray([1, 2, 3], [4, 5, 6]));

