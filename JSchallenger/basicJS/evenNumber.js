/**
 * Write a function that takes a number as argument
 * If the number is even, return true
 * Otherwise, return false
 */

function isEvenNumber(number) {
  return number % 2 === 0;
}

console.log(isEvenNumber(10));
console.log(isEvenNumber(5));
console.log(isEvenNumber(-4));
console.log(isEvenNumber(-111));
