class myError {
  constructor(message) {
    this.name = 'myError';
    this.message = message;
  };
};

myError.prototype.Throw = function() {
  console.log(this.name, ": ", this.message);
};

throw new myError('Valor muito alto!');
