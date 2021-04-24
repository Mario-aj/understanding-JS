let firstVariable = 'Mario';

console.log(firstVariable)
delete firstVariable;
console.log(firstVariable);

let person = {
  name: 'Alfredo',
  age: 23,
  gender: 'male'
};

console.log(person.name);
delete person.name;
console.log(person.name);


console.log(person);
delete person;
console.log(person);


let people = ['Mario', 'Foguinho', 'Fernando', 'Isabel', 'Jorgito'];

console.log(people.length);
delete people[0];
console.log(people.length);
console.log(people[0]);

console.log('Foguinho' in people);
