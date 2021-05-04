/**
 * Write a function that takes an array and a number (n) as arguments
 * It should return the last n array elements
 * If the array has less than n elements, return all
 */


function returnLastNArrayElements(array, n) {

  return array.slice(array[array.length - n - 1]);
}

console.log(returnLastNArrayElements([1, 2, 3, 4, 5], 2));
console.log(returnLastNArrayElements([1, 2, 3], 6));
console.log(returnLastNArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

