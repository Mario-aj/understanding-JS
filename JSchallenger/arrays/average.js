/**
 * Write a function that takes an array of numbers as argument
 * It should return the average of the numbers
 */

function average(array) {
  let lenght = array.length;
  array = array.reduce((acumulator, value) => acumulator + (value / lenght), 0).toString().split('.')[0];
  return Number(array);
};

let arr = [10,100,40];


console.log(average([10,100,40]));
console.log(average([10,100,1000]));
console.log(average([-50,0,50,200]));
console.log(average([1, 2, 3, 4, 5]));
