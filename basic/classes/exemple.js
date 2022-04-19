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

class Teacher extends Person{
  constructor (first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);

    this.subject = subject;
  };
};

let person = new Person('Mario', 'Jorge', 23, 'Male', 'Programming');
let teacher = new Teacher('Elineth', 'Tavares', 25, 'Female', 'Law', 'Mekaup');

person.greeting();
teacher.greeting();

console.log(teacher.subject);
