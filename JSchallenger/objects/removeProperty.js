/**
 * Write a function that takes an object as argument
 * It should return an object with all original object properties but the property with key 'country'
 */

let removePropertyFromObject = (obj) => {
  delete obj.country;
  return obj;
};


console.log(removePropertyFromObject({ continent: 'Asia', country: 'Japan', region: 'Kansai' }));
