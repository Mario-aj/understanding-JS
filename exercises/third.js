/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let largestPrimeFactor = (number) => {
  let divResult = 0;
  let primes = [];

  for (let i = 2; i <= number; i++){
    divResult = number / i;

    if (Number.isInteger(divResult)){
      primes.push(i);
      number = divResult;
    }
  }
  return Math.max(...primes);
};

let number = 600851475143;
console.log(largestPrimeFactor(number));
