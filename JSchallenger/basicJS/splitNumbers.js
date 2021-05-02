/**
 * Write a function that takes a number as argument
 * The function should split the number into its individual digits and return them in an array
 * Tipp: you might want to change the type of the number for the splitting
 */


function splitNumbers(number) {
  number = String(number).split('');
  return number.map(value => Number(value));
}

console.log(splitNumbers(10));
console.log(splitNumbers(937));
console.log(splitNumbers(193278));
