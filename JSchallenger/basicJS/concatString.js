/**
 * Write a function that takes two strings, say a and b, as arguments
 * If a contains b, append b to the beginning of a
 * If not, append it to the end
 * Return the concatenation
 */

function concatStrings(string, valueToConcat) {
  let newString = '';

  newString = string.includes(valueToConcat)
    ? newString.concat(valueToConcat, string)
    : newString.concat(string, valueToConcat);

  return newString;
}

console.log(concatStrings("cheese", "cake"));
console.log(concatStrings('lips', 's'));
console.log(concatStrings("Java", "script"));
console.log(concatStrings(" think, therefore I am","I"));
