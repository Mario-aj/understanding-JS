/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let largest = (number) => {
  let counter = 2
  let divResult;
  let largestPrimeFactor = 0;

  while (counter <= number) {
    divResult = (number / counter);

    let restCounter = 0;
    for (i = 0; i <= divResult; i++) {
      if(divResult % i === 0) restCounter++;
    }

    if (restCounter === 2)
      if (divResult >= largestPrimeFactor)
        largestPrimeFactor = divResult;

    counter++;
  };

  return largestPrimeFactor;
}

let number = 13195;
console.log(largest(number));
