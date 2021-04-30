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

console.log(concatStrings("cheese", "cake"));
console.log(concatStrings('lips', 's'));
console.log(concatStrings("Java", "script"));
console.log(concatStrings(" think, therefore I am","I"));

//function2
function concatBySecondMethod(str, value) {
  return str.indexOf(value) >= 0
    ? `${value}${str}`
    : `${str}${value}`;
}

console.log(concatBySecondMethod("cheese", "cake"));
console.log(concatBySecondMethod('lips', 's'));
console.log(concatBySecondMethod("Java", "script"));
console.log(concatBySecondMethod(" think, therefore I am","I"));

//function3
function concatByThirdMethod(str, value) {
  return str.indexOf(value) >= 0
    ? value + str
    : str + value;
}

console.log(concatByThirdMethod("cheese", "cake"));
console.log(concatByThirdMethod('lips', 's'));
console.log(concatByThirdMethod("Java", "script"));
console.log(concatByThirdMethod(" think, therefore I am","I"));