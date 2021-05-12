/**
 * Write a function that takes a string and an object with two properties as arguments
 * It should return the value of the property with key equal to the value of the string
 */

let accessing = (obj, str) => {
  let result = Object.keys(obj).find(value => value === str)
  return obj[result]
};

console.log(accessing({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(accessing({  country: 'Sweden',  continent: 'Europe'}, 'country'));
