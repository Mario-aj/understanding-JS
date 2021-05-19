class Family {
  constructor (father, mother) {
    this._father = father;
    this._mother = mother;
  };

  get father () {
    return this._father
  };

  get mother () {
    return this._mother;
  };
};


let family = new Family('Paulo', 'Admira');

console.log(family.father);
console.log(family.mother);
