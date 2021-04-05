const firstName = 'Mario';

console.log(firstName); // MArio

// firstName = 'Jorge' // TypeError: Assignment to constant variable.
console.log(firstName);

const person = {
  firstName: 'Mario',
  lastName: 'Jorge',
  age: 23,
  nationality: 'Angola'
}

console.log(person);

person = {
  firstName: 'Mario',
  lastName: 'Jorge',
  age: 23,
  nationality: 'Brazil'
} // TypeError: Assignment to constant variable.
console.log(person);


person.nationality = 'Brazil';
console.log( person);

/**
 * When we use constants, we cannot reassign a new value to the finding,
 * since it is immutable, but if it is an object, we can change the value
 * of that object's property, which in this case is a finding.
 */
