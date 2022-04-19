//Declarate an array.
let arrayWithNewArray = new Array('elem0', 'elem1', 'elem2');
let arrayWithArray = Array('elem0', 'elem1', 'elem2');
let array = ['elem0', 'elem1', 'elem2'];


console.log('Elements: ', arrayWithNewArray, 'length: ', arrayWithNewArray.length);
console.log('Elements: ', arrayWithArray, 'length: ', arrayWithArray.length);
console.log('Elements: ', array, 'length: ', array.length);

//create array with length different of 0 and without elements. 
let lengthOfArray = 32;
let emptyArrayWithNewArray = new Array(lengthOfArray);
let emptyArrayWithArray = Array(lengthOfArray);
let emptyArray = [];

emptyArray.length = lengthOfArray;

console.log('length: ', emptyArrayWithNewArray);
console.log('length: ', emptyArrayWithArray);
console.log('length: ', emptyArray);

