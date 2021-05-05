/**
 * Write a function that takes an array of strings as argument
 * It should return the longest string
 */

function longestString(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++)
    if (array[i].length > result.length)
      result = array[i];
  
  return result;
};

console.log(longestString(['help', 'me']));
console.log(longestString(['I', 'need', 'candy']));
console.log(longestString(['Mario', 'Alfredo', 'Jorge', 'Angola', 'Elineth']));
console.log(longestString(['Fernando', 'Paulo', 'Isabel', 'Foguinho', 'Jorgito', 'Admira']));
console.log(longestString(['Admira', 'Fernando', 'Paulo', 'Web developer']));

function longestStringWithReduce(array) {
  return array.reduce((result, elem) => result.length > elem.length ? result : elem, '');
};


console.log(longestStringWithReduce(['help', 'me']));
console.log(longestStringWithReduce(['I', 'need', 'candy']));
console.log(longestStringWithReduce(['Mario', 'Alfredo', 'Jorge', 'Angola', 'Elineth']));
console.log(longestStringWithReduce(['Fernando', 'Paulo', 'Isabel', 'Foguinho', 'Jorgito', 'Admira']));
console.log(longestStringWithReduce(['Admira', 'Fernando', 'Paulo', 'Web developer']));
