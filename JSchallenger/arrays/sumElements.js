/**
 * Write a function that takes an array and a number, say num, as arguments
 * Sum up all array elements with a value greater than num
 * Return the sum
 */

function sumElementGreaterThan(array, value) {
  return array
    .filter(elem => elem > value)
    .reduce((total, current) => total + current, 0);
};

console.log(sumElementGreaterThan([1, 2, 3, 4, 5, 6, 7], 2));
