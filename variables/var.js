// var
var age = 23;

console.log(age); // 23.

for (var count = 0; count <= 10; count++)
  console.log('Inside for: ', count); // 1, 2, 3,..., 10

console.log('outside for: ', count) // 11.

if (true) {
  var gender = 'Male';
  console.log('Inside if: ', gender); // inside if
}

console.log('outside if: ', gender); //outside if

function printVar() {
  var birthday = 29;
  console.log('birthday inside function: ', birthday); // 29
};

console.log('birthday ouside function: ', birthday) // ReferenceError: birthday is not defined

/**
 * So, we can see that declaring variables within a closed scope, such as
 * if or for, it can still be used as outside those scopes, but when it is
 * declared within the scope of a function, then it is used only in that scope,
 * we can't reuse this variables outside of the function that was declared.
 */
