/**
 * Write a function that takes an object with the properties number and percentage as argument
 * Return the given percentage of the number 
 */

Number.prototype.isFloat = (number) => {
  const [, fractional] = String(number).split('.');

  return !!fractional;
}

function percentageOfNumbers(prop) {
  let percentage = prop.number * (prop.percentage / 100);
  
  return percentage.isFloat()
    ? Number(percentage.toFixed(2))
    : percentage;
};

console.log(percentageOfNumbers({number: 100, percentage: 50}));
console.log(percentageOfNumbers({number: 777, percentage: 2}));
console.log(percentageOfNumbers({number: 500, percentage: 99}));
