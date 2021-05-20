class Square {
  constructor (height, width) {
    this.name = 'Square';
    this.height = height;
    this.width = width;
  };

  area() {
    console.log('the area of ', this.name, ' is ', this.height * this.width);
  };
};

const square = new Square(12, 4);

square.area();
