// hoisting in variables.
var number = 10;

console.log(number); // 10

function printNumber() {
  console.log(number); //undefined

  var number = 50;
  console.log(number); // 50
};

printNumber();

//hoisting in functions

function returnFuntionValue() {
  function returnValue() {
    return 1;
  };

  return returnValue();

  function returnValue() {
    return 2;
  };
};

console.log(returnFuntionValue()); // 2

function printSomeThing() {
  var firstThing = function () {
    return 'First';
  };

  return firstThing();

  var secondThing = function () {
    return 'Second';
  };
}

console.log(printSomeThing()); //First
