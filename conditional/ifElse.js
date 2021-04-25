var Name = 'Mario';

if(Name === 'Mario'){
  console.log('You may come in');
}else {
  console.log('Your name is not Mario');
};

var number = 40;

if (number instanceof Number) console.log('number is instanceof Number');
else if ((number = new Number(190)) instanceof Number) console.log('Yes, now it is.');
else console.log('number is not instanceof Number');
