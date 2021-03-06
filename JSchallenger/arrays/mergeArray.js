/**
 * Write a function that takes arguments an arbitrary number of arrays
 * It should return an array containing the values of all arrays
 */

function mergeArray(...arrays) {
  let array = [];
  return array.concat(...arrays);
};

console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(mergeArray(['a', 'b', 'c'], [4, 5, 6]));
console.log(mergeArray([true, true], [1, 2], ['a', 'b']));


function mergeArrayWithFlat(...arrays) {
  return arrays.flat();
};

console.log(mergeArrayWithFlat([1, 2, 3], [4, 5, 6]));
console.log(mergeArrayWithFlat(['a', 'b', 'c'], [4, 5, 6]));
console.log(mergeArrayWithFlat([true, true], [1, 2], ['a', 'b']));
