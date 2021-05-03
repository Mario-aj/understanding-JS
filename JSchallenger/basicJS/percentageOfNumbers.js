/**
 * Write a function that takes an object with the properties number and percentage as argument
 * Return the given percentage of the number 
 */

function percentageOfNumbers(prop) {
  return prop.number * (prop.percentage / 100);
}

console.log(percentageOfNumbers({number: 100, percentage: 50}));
console.log(percentageOfNumbers({number: 777, percentage: 2}));
console.log(percentageOfNumbers({number: 500, percentage: 99}));
