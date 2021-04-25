// First
var Name = 'Mario';

if(Name === 'Mario'){
  console.log('You may come in');
}else {
  console.log('Your name is not Mario');
};


// Second
var number = 40;

if (number instanceof Number) console.log('number is instanceof Number');
else if ((number = new Number(190)) instanceof Number) console.log('Yes, now it is.');
else console.log('number is not instanceof Number');

// third
var weight = 50;

if(weight < 18) console.log('You will die, :)');
else if (weight >= 18 && weight < 30) console.log('also will die, hahahaha');
else if (weight >= 30 && weight < 45) console.log('You need so much food');
else if (weight >= 45 && weight < 60) console.log('It aceptable, no need food also, :)');
else if (weight >= 60 && weight < 90) console.log('You have a good life, do you have arplane?, hahhaha');
else if (weight >= 90) console.log('I think that, you need to walk more,\
no just walk, run also is necessary');
