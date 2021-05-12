/**
 * Write a function that takes an object with two properties as argument
 * It should return the value of the property with key country
 */

let acessingObjectPropertyOne = (obj) => {
  return obj.country;
};

console.log(acessingObjectPropertyOne({continent: 'Asia',  country: 'Japan'}));
console.log(acessingObjectPropertyOne({country: 'Sweden',  continent: 'Europe'}));
