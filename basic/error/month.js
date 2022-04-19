class Months {
  constructor (month) {
    this.months = [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun',
      'jul', 'aug', 'sep', 'Out', 'Nov', 'Dez',
    ];

    this.month = month - 1;
  };

  getMonthName() {
    if (this.months[this.month]) 
      return this.months[this.month];
    else throw 'The month that you specified does not exist.';
  };
};

try {
  let month = new Months(13);

  console.log(month.getMonthName());
} catch(e) {
  console.log('meu erro: ', e);
}finally {
  console.log('finally');
}
