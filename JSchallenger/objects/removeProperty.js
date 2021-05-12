/**
 * Write a function that takes an object as argument
 * It should return an object with all original object properties but the property with key 'country'
 */

let removePropertyFromObject = (obj) => {
  delete obj.country;
  return obj;
};


console.log(removePropertyFromObject(
  { continent: 'Asia', country: 'Japan', region: 'Kansai' }
));

console.log(removePropertyFromObject(
  { country: 'Sweden', continent: 'Europe', planet: 'Earth' }
));

console.log(removePropertyFromObject(
  { 
    city: 'Sacramento', 
    state: 'California',
    country: 'USA',
    continent: 'North America'
  }
));
