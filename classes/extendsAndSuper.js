class Car {
  constructor (name) {
    this.carName = name;
  };

  present() {
    return 'I have a ' + this.carName;
  };
};

class Modal extends Car {
  constructor (name, modal) {
    super(name);
    this.modal = modal;
  };

  show() {
    console.log(this.present() + " it's a Sonata", + this.modal);
  };
};

const car = new Modal('Elantra', 2021);

car.show();