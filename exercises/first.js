let result = 0;
let newResult = 0;

for(let i = 0; i < 100; i++){
  (i % 3 === 0 || i % 5 === 0) && (result += i);  
};

console.log(result);

for (let j = 0;  j < 100; j++){
  if (j % 3 !== 0 && j % 5 !== 0)
    continue;
  newResult += j;
};

console.log(newResult);

let resultWhile = 0;
let count = 0
while(count < 100){
  (count % 3 === 0 || count % 5 === 0) ? resultWhile += count++ : count++;
}

console.log(resultWhile);
