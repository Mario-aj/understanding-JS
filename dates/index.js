// constructors
/**
 * new Date()
 * new Date(value)
 * new Date(dateString)
 * new Date(year, month, hour, minute, second,milisecond);
 */

let myDate = Date();
let myNewDate = new Date();

console.log('my date: ', myDate);
console.log('my new date: ', myNewDate.toLocaleString());

//initial date in JS.
let intialDate = new Date(86400000);
console.log(intialDate.toLocaleString());
