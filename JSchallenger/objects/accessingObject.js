/**
 * Write a function that takes an object with two properties as argument
 * It should return the value of the property with key 'prop-2'
 * Tipp: you might want to use the square brackets property accessor
 */

let acessingObjectProperties = (obj) => {

  return obj['prop-2'];
}

console.log(acessingObjectProperties({one: 1,  'prop-2': 2}));
console.log(acessingObjectProperties({'prop-2': 'two',  prop: 'test'}));
