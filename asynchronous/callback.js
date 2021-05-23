function callback(person) {
  console.log('good morning ', person);
};

function greatingPeople(callback) {
  let person = 'Mario Jorge';
  callback(person);
};

greatingPeople();
