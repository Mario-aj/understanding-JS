/**
 * The sum of the squares of the first ten natural numbers is: 
  (1² + 2² + ... + 10²) = 385

 * The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10) = 55² = 3025

* Hence the difference between the sum of the squares of the first ten natural 
* numbers and the square of the sum is 3025 - 385 = 2640.

* Find the difference between the sum of the squares of the first one hundred
* natural numbers and the square of the sum.
 */

const sumSquares = (prop) => {
  let result = 0;
  for (let i = 1; i <= prop; i++) {
    result += i * i;
  }

  return result;
};

const squareSum = (prop) => {
  let result = 0;

  for (let i = 1; i <= prop; i++) {
    result += i;
  }

  return result * result;
};

const sumSquareDifference = (prop) => {
  return squareSum(prop) - sumSquares(prop);
};

console.log(sumSquareDifference(100));
