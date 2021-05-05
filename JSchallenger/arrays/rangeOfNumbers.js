/**
 * Write a function that takes two numbers, say min and max, as arguments
 * Return an array of numbers in the range min to max
 */

function rangeOfNumbers(min, max) {
  let generateArray = [];
  for(min; min <= max; min++) generateArray.push(min);

  return generateArray;
};

console.log(rangeOfNumbers(2, 10));
console.log(rangeOfNumbers(1, 3));
console.log(rangeOfNumbers(-5, 5));
console.log(rangeOfNumbers(2, 7));
