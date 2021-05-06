/**
 *    sintaxe
 * function nameOfFunction() {
 *  code
 *  return valueOfReturn (optional)
 * }
 */
 
function square(number) {
  return number * number;
};

console.log(square(4));

//anonymous functions

let squareAnonymous = function (number) {
  return number ** 2;
};

console.log(squareAnonymous(4));
