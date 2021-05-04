/**
 * Write a function that takes an array of numbers as argument
 * It should return an array with the numbers sorted in descending order
 */

function SortNumbers(numbers) {
  
  return numbers.sort((a, b) => b - a);
}

console.log(SortNumbers([2, 5, 1, 2]));
console.log(SortNumbers([1,3,2, 60, 3, 8, 90, 1050, 130]));
console.log(SortNumbers([4,2,3,1]));
