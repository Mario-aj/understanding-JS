function largestPalindromeProduct(digits) {
  let lowerLimits = 10;
  let upperLimits = 99;
  let maxPalindrome = 0;

  for (let i = lowerLimits; i <= upperLimits; i++) {
    for (let j = i + 1; j <= upperLimits; j++) {
      let product = i * j;

      if (isPalindrome(product) && maxPalindrome < product)
        maxPalindrome = product;
    }
  }

  console.log(maxPalindrome);
}

function isPalindrome(number) {
  let splited = String(number).split("");
  let splitedLength = splited.length - 1;

  for (let i = 0, j = splitedLength; i <= splited.length, j >= 0; j--, i++) {
    if (splited[i] !== splited[j]) return false;
  }

  return true;
}

largestPalindromeProduct(2);
