/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can
 * see that the 6th prime is 13.

 * What is the 10 001st prime number?
 */

const firstPrime = (props) => {
  let numbers = [];
  let result = [];

  for (let i = 2; i <= props; i++) {
    numbers.push(i);
  }

  for (let elem = 2; elem <= numbers.length - 1; elem++) {
    let count = 0;

    for (let i = 1; i <= elem; i++) {
      if (elem % i === 0) count++;
    }

    if (count === 2) {
      numbers = numbers.filter((e) => e % elem !== 0);
      result.push(elem);
    }

    count = 0;
  }

  return result;
};

console.log(firstPrime(1000));
