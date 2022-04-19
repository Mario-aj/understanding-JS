/**
 * A palindromic number reads the same both ways. The largest palindrome made 
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 
  * Find the largest palindrome made from the product of two 3-digit numbers
 */

const isPolindrome = (number) => {
  let splitedNumber = String(number).split('');
  let lenght = splitedNumber.length - 1;

  for(let i = 0, j = lenght; i <= lenght; i++, j--) {
    if(splitedNumber[i] !== splitedNumber[j]) return false;
  }

  // console.log(number);
  return true;
};

let findTheLargestPolindrome = () => {
  let largestPolindromeProduct = 0;

  for (let i = 100; i <= 999; i ++){
    for (let j = i + 1; j <= 999; j++) {
      let product = i * j;
      if(isPolindrome(product) && product > largestPolindromeProduct)
        largestPolindromeProduct = product;
    }
  }

  return largestPolindromeProduct;
};

console.log(findTheLargestPolindrome());