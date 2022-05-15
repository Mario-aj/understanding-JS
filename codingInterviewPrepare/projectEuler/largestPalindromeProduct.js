function largestPalindromeProduct(digits) {
  const [lowerLimits, upperLimits] = getLimites(digits);
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

function getLimites(digits) {
  let lowerLimits = "1";
  let upperLimits = "9";

  for (let i = 1; i < digits; i++) {
    lowerLimits += "0";
    upperLimits += "9";
  }

  return [Number(lowerLimits), Number(upperLimits)];
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
largestPalindromeProduct(3);
