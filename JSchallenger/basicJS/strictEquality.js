/**
 * Write a function that takes two values, say a and b, as arguments
 * Return true if the two values are equal and of the same type
 */

function isStrictlyTheSame(arg1, arg2) {
  return arg1 === arg2;
};

console.log(isStrictlyTheSame(2, 3));
console.log(isStrictlyTheSame(3, 3));
console.log(isStrictlyTheSame('1', 1));
console.log(isStrictlyTheSame('10', '10'));
