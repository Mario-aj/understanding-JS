/**
 * Write a function that takes an array and a value as argument
 * The function should clean the array from all occurrences of the given value and return the the cleaned version
 */


function removeElements(array, value) {
  let resultArray = [];
  let counter = 0;
  while (counter < array.length) 
    array[counter] !== value ? resultArray.push(array[counter++]) : counter++;

  return resultArray;
};

console.log(removeElements([1,2,3], 2));
