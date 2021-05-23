function callback(person) {
  console.log('good morning mister', person);
};

function greatingPeople(callback) {
  let person = 'Mario Jorge';
  callback(person);
};

greatingPeople(callback);
