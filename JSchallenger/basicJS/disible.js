/**
 * // Write a function that takes two numbers, say x and y, as arguments
 * Check if x is divisible by y
 * If yes, return x
 * If not, return the next higher natural number that is divisible by y
 */

function divisible(x, y) {
  if (x % y === 0) return x;
  else {
    while(x % y !== 0) x++; 

    return x;
  }
};

console.log(divisible(1, 23));
console.log(divisible(23, 23));
console.log(divisible(7, 3));
console.log(divisible(-5, 7));
