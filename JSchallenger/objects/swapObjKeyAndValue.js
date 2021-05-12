/**
 * Write a function that takes an object as argument
 * Somehow, the properties and keys of the object got mixed up
 * Swap the Javascript object's key with its values and return the resulting object
 */
let swapKey = (obj) => {
  
  let result = {};

  for (let key in obj) 
    result[obj[key]] = key;
  return  result;
};

console.log(swapKey());
