/**
 * This challenge is a little bit more complex
 * Write a function that takes a number as argument
 * If the number is prime, return the number
 * If not, return the next higher prime number
 */

 function findNextHigherPrimeNumber(number) {
  let isDivisible = 0;
  number++;
  for (let i = 0; i <= number; i++)
    if (number % i === 0) isDivisible++;
  
  if (isDivisible === 2) return number;

  return findNextHigherPrimeNumber(number);
};

function nextHigherPrimeNumber(number) {
  let isDivisible = 0;
  for (let i = 0; i <= number; i++)
    if (number % i === 0) isDivisible++;
  
  if (isDivisible === 2) return number;


  return findNextHigherPrimeNumber(number);
};

console.log(nextHigherPrimeNumber(38));
console.log(nextHigherPrimeNumber(7));
console.log(nextHigherPrimeNumber(115));
console.log(nextHigherPrimeNumber(2000));
