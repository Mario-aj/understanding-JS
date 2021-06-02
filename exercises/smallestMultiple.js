/**
 * 2520 is the smallest number that can be divided by each of the numbers 
 * from 1 to 10 without any remainder.

 * What is the smallest positive number that is evenly divisible by all of 
 *the numbers from 1 to 20?
 */

const smallestMultiple = () => {
  number = 10;
  limit = number;
  results = [];

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

console.log(smallestMultiple());
