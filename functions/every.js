let every = (func, array) => {
  
  for (let i = 0; i < array.length; i++)
    if (!func(array[i])) return false

  return true
};

let arr = [5, 6, 7, 8, 9];
//false
console.log(every(value => value >= 6, arr));
console.log(arr.every(value => value >= 6));
//true
console.log(every(value => value >= 2, arr));
console.log(arr.every(value => value >= 2));