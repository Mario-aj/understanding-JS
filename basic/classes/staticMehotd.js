class Square {
  constructor (height, width) {
    this.name = 'Square create by Mario from Angola';
    this.height = height;
    this.width = width;
  };

  area() {
    console.log('the area of ', this.name, ' is ', this.height * this.width);
  };

  static sayMyName(square) {
    console.log(square.name);
  }

  static duplicatedArea(obj) {
    console.log('the duplicated area is: ', obj.height * obj.width * 2);
  }

  newDuplicatedArea(square) {
    console.log(Square.duplicatedArea(square));
  };
};

const square = new Square(12, 4);

square.area();
square.newDuplicatedArea(square);
//square.sayMyName(); // Error
Square.sayMyName(square);
Square.duplicatedArea(square);
