/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the given number?
 */
function isPrime(num) {
  let dividers = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) dividers++;
  }

  return dividers === 2;
}
function largestPrimeFactor(number) {
  let primeFactors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) primeFactors.push(i);
  }

  console.log(Math.max(...primeFactors));
}

largestPrimeFactor(13195);
