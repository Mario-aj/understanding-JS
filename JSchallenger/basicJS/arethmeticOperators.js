/**
 * Write a function that takes two numbers, say a and b, as arguments
 * If a is smaller than b, divide a by b
 * Otherwise, multiply both numbers
 * Return the resulting value
 */

function divideOrMultplyNumbers(a, b) {
  return (a < b) ? (a / b) : (a * b);
};

console.log(divideOrMultplyNumbers(10, 100));
console.log(divideOrMultplyNumbers(90, 45));
console.log(divideOrMultplyNumbers(8, 20));
console.log(divideOrMultplyNumbers(2, 0.5));
