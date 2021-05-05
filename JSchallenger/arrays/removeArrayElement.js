/**
 * Write a function that takes an array and a value as argument
 * The function should clean the array from all occurrences of the given value and return the the cleaned version
 */


function removeElements(array, value) {
  return array.filter(elem => elem !== value);
};

console.log(removeElements([1,2,3], 2));
console.log(removeElements([1,2,'2'], '2'));
console.log(removeElements([false,'2',1], false));
console.log(removeElements([1,2,'2',1], 1));
