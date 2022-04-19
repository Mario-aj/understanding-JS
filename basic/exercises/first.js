/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

let result = 0;
let newResult = 0;

for(let i = 0; i < 1000; i++){
  (i % 3 === 0 || i % 5 === 0) && (result += i);  
};

console.log(result);

for (let j = 0;  j < 1000; j++){
  if (j % 3 !== 0 && j % 5 !== 0)
    continue;
  newResult += j;
};

console.log(newResult);

let resultWhile = 0;
let count = 0
while(count < 1000){
  (count % 3 === 0 || count % 5 === 0) ? resultWhile += count++ : count++;
}

console.log(resultWhile);
