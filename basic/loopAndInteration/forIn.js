const person = {
  name: 'Mario',
  age: 23,
  profission: 'Frontend developer',
  nationality: 'Angola',
  status: 'single'
};


for (let prop in person)
  console.log(prop);


const cars = ['Ferrari', 'Toyota', 'TXL patrol', 'V8 Obama'];

for (let elem in cars)
  console.log(elem);

console.log('===========\\===========');

for (let prop in person)
  console.log(person[prop]);

for (let elem in cars)
  console.log(cars[elem]);