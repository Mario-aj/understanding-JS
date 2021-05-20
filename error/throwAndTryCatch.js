class myError {
  constructor(message) {
    this.name = 'myError';
    this.message = message;
  };
};

myError.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

throw new myError('Valor muito alto!');

