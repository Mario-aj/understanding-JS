

function percentageOfNumbers(prop) {
  return prop.number * (prop.percentage / 100);
}

console.log(percentageOfNumbers({number: 100, percentage: 50}));
console.log(percentageOfNumbers({number: 777, percentage: 2}));
console.log(percentageOfNumbers({number: 500, percentage: 99}));
