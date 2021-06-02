/**
 * 2520 is the smallest number that can be divided by each of the numbers 
 * from 1 to 10 without any remainder.

 * What is the smallest positive number that is evenly divisible by all of 
 *the numbers from 1 to 20?
 */

const myEvery = require("../functions/every");

const myEveryFunction = (prop) => {
  let number = prop;
  let array = [];

  for (let i = 1; i <= number; i++) array.push(i);

  while (true) {
    if (myEvery((elem) => number % elem === 0, array)) return number;

    number++;
  }
};

const otherFunction = (prop) => {
  let number = prop;
  let array = [];

  for (let i = 1; i <= number; i++) array.push(i);

  while (true) {
    if (array.every((elem) => number % elem === 0)) return number;

    number++;
  }
};

const smallestMultiple = (prop) => {
  let number = prop;
  let results = [];

  while (true) {
    for (let i = 1; i <= prop; i++) {
      if (number % i !== 0) {
        results = [];
        break;
      }

      results.push(i);
    }

    if (results.length === prop) return number;
    number++;
  }
};

console.log("first: ", smallestMultiple(20)); // 21s to execute
console.log("second: ", otherFunction(20)); // 4s to execute
console.log("third: ", myEveryFunction(20)); // 5s to execute
