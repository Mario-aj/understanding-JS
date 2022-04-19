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
let intialDate = new Date(0);
console.log(intialDate);

//Methods
console.log(Date.now());
console.log(Date.parse("Thu May 06 2021 09:26:00 GMT+0300"));
console.log(Date.UTC(1970, 00, 01, 0, 0, 0, 0));

//Years with two digits

let date = new Date(97, 1);
console.log(date);

