class Person {
  constructor (first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };
};

Person.prototype.greeting = function () {
  console.log("Hi, I'm ", this.name.first + ' ' + this.name.last);
};

let person = new Person('Mario', 'Jorge', 22, 'Male', 'Programming');

person.greeting();
