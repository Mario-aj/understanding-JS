class Person {
  constructor(name) {
    this._name = name;
  };

  get print() {
    return this._name;
  };

  set setupName(name) {
    this._name = name;
  };
};

let person = new Person('Mario');

console.log(person._name);
