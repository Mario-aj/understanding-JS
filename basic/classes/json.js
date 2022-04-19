let obj = { "name": "Mario", "age": "22", "country": "Angola" };

const convertedObjToString = JSON.stringify(obj);

console.log(convertedObjToString);

const newObj = JSON.parse(convertedObjToString);
console.log(newObj);
