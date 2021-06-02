/**
 * 2520 is the smallest number that can be divided by each of the numbers 
 * from 1 to 10 without any remainder.

 * What is the smallest positive number that is evenly divisible by all of 
 *the numbers from 1 to 20?
 */

const otherFunction = (prop) => {
  let number = prop;
  let array = [];

  for (let i = 1; i <= number; i++) array.push(i);

  while (true) {
    if (array.every((elem) => number % elem === 0)) return number;

    number++;
  }
};

const smallestMultiple = () => {
  let number = 10;
  let limit = number;
  let results = [];

  while (true) {
    for (let i = 1; i <= limit; i++) {
      if (number % i !== 0) {
        results = [];
        break;
      }

      results.push(i);
    }

    if (results.length === limit) return number;
    number++;
  }
};

console.log("first: ", smallestMultiple());
console.log("second: ", otherFunction(10));
