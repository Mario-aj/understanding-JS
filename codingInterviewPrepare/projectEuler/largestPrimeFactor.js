/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the given number?
 */
function isPrime(num) {
  let prime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
}
function largestPrimeFactor(number) {
  let primeFactors = [];

  for (let i = 2; i <= number; i++) {
    let divide = number / i;

    if (Number.isInteger(divide) && isPrime(i)) {
      primeFactors.push(i);
      number = divide;
    }
  }

  console.log(Math.max(...primeFactors));
}

largestPrimeFactor(2);
largestPrimeFactor(3);
largestPrimeFactor(5);
largestPrimeFactor(7);
largestPrimeFactor(8);
largestPrimeFactor(13195);
largestPrimeFactor(600851475143);
