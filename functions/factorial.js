function factorial(number) {
  return number === 0 ? 1 : number * factorial(number - 1)
};

console.log(factorial(5));

// anonymous function
let anonymousFactorial = function(number) {
  return number === 0 ? 1 : number * anonymousFactorial(number - 1);
};

console.log(anonymousFactorial(5));

// arrow function
let arrowFunctionFactorial = (number) => {
  return number === 0 ? 1 : number * anonymousFactorial(number - 1);
};

console.log(arrowFunctionFactorial(5));
