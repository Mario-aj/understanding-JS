let filter = (func, array) => {
  let result = [];
  let resultCount = 0;

  for (let i = 0; i <= array.length; i++)
    if (func(array[i])) result[resultCount++] = array[i];
  return result;
};

let array = [1, 3, 5, 7, 6, 2, 4, 8];
let filteredArray = filter((elem) => elem >= 4, array);

console.log(filteredArray);