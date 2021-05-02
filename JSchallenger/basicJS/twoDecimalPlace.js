/**
 * Write a function that takes a number as argument
 * Round the number to the 2nd digit after the comma
 * Return the rounded number
 */

function roundedNumbers(number) {

  return number.toFixed(2);
};

console.log(roundedNumbers(2.12397));
console.log(roundedNumbers(3.136));
console.log(roundedNumbers(1.12397));
console.log(roundedNumbers(26.1379));

