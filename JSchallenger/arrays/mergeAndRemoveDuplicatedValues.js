/**
 * Write a function that takes two arrays as arguments
 * Merge both arrays and remove duplicate values
 * Sort the merge result in ascending order
 * Return the resulting array
 */

function some(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) 
      if (array[i] === array[j]);
        return true;
  };
  return false;
};

function mergeAndRemoveDuplicatedValues(...arrays) {
  let concatedArrays = [];
  concatedArrays = concatedArrays.concat(...arrays);

  return some(concatedArrays);
};

console.log(mergeAndRemoveDuplicatedValues([1, 2, 3], [3, 5, 5, 6]));
