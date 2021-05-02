/**
 * Write a function that takes a number as argument
 * Round the number to the 2nd digit after the comma
 * Return the rounded number
 */

function roundedNumbers(number) {

  return Number(number.toFixed(2));
};

console.log(roundedNumbers(2.12397));
console.log(roundedNumbers(3.136));
console.log(roundedNumbers(1.12397));
console.log(roundedNumbers(26.1379));


function roundedNumbersMath(number) {
  let [decimal, fractional] = String(number).split('.');
  let counter = Number(fractional.length) - 2;

  for (let i = 0; i < counter; i++)
    fractional /= 10;

  const roundedNumber = decimal + '.' + parseInt(fractional);

  return Number(roundedNumber);
}

console.log(roundedNumbersMath(2.12397));
console.log(roundedNumbersMath(3.136));
console.log(roundedNumbersMath(1.12397));
console.log(roundedNumbersMath(26.1379));

