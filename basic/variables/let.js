// var
let age = 23;

console.log(age); // 23.

for (let count = 0; count <= 10; count++)
  console.log('Inside for: ', count); // 1, 2, 3,..., 10

console.log('outside for: ', count) // ReferenceError: count is not defined

if (true) {
  let gender = 'Male';
  console.log('Inside if: ', gender); // inside if Male
}

console.log('outside if: ', gender); //ReferenceError: gender is not defined

function printVar() {
  let birthday = 29;
  console.log('birthday inside function: ', birthday); // 29
};

console.log('birthday ouside function: ', birthday) // ReferenceError: birthday is not defined

/**
* So, as we can see, when we declared variables with key word 'let',
this variables become only used whithin that scope where they are
declared, we can't reuse that variables outside the scope that was declared.
 */
