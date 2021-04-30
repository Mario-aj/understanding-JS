/**
 * Write a function that takes two strings, say a and b, as arguments
 * If a contains b, append b to the beginning of a
 * If not, append it to the end
 * Return the concatenation
 */

//function 1
function concatStrings(string, valueToConcat) {
  let newString = '';

  newString = string.includes(valueToConcat)
    ? newString.concat(valueToConcat, string)
    : newString.concat(string, valueToConcat);

  return newString;
}

//function2
function concatByAnotherMethods(str, value) {
  return str.indexOf(value) >= 0
    ? `${value}${str}`
    : `${str}${value}`;
}

console.log(concatStrings("cheese", "cake"));
console.log(concatStrings('lips', 's'));
console.log(concatStrings("Java", "script"));
console.log(concatStrings(" think, therefore I am","I"));

console.log(concatByAnotherMethods("cheese", "cake"));
console.log(concatByAnotherMethods('lips', 's'));
console.log(concatByAnotherMethods("Java", "script"));
console.log(concatByAnotherMethods(" think, therefore I am","I"));

