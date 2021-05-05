/**
 * Write a function that takes two arrays as arguments
 * Merge both arrays and remove duplicate values
 * Sort the merge result in ascending order
 * Return the resulting array
 */

function some(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) 
      if (array[i] === array[j])
        array.splice(i, 1);
  };
  return array;
};

function mergeAndRemoveDuplicatedValues(...arrays) {
  let concatedArrays = [];
  concatedArrays = concatedArrays.concat(...arrays);

  return some(concatedArrays).sort((a, b) => a - b);
};

console.log(mergeAndRemoveDuplicatedValues([1, 2, 3], [3, 4, 5, , 6]));
console.log(mergeAndRemoveDuplicatedValues([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log(mergeAndRemoveDuplicatedValues([1, 4, 7, 1, 2, 2, 1, 7, 4, 6], [3, 6, 7, 7, 1, 1, 4, 9, 6, 10, 56, 4, 2]));
