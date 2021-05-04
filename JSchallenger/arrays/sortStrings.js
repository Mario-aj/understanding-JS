/**
 * Write a function that takes an array of strings as argument
 * It should return the array with its values sorted alphabetically
 */

function SortString(string) {
  return string.sort();
};

console.log(SortString(['b', 'c', 'd', 'a']));
console.log(SortString(['z', 'c', 'd', 'a', 'y', 'a', 'w']));