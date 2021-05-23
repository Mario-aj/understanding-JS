function callback(person) {
  console.log('good morning Mr. ', person);
};

function greatingPeople(callback) {
  let person = 'Mario Jorge';
  callback(person);
};

greatingPeople(callback);

// another form to write callbacks
let anotherGreeting  = () => {
  let person = 'Mario Jorge';
  callback(person);
}; 

anotherGreeting((person) => {
  console.log('good morning Mr. ', person);
});
