const person = {
  name: 'Mario',
  age: 23,
  profission: 'Frontend developer',
  nationality: 'Angola',
  status: 'single'
};


for (let prop in person)
  console.log(person[prop]);
