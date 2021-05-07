let push = (array, element, position) => {
  let result = [];

  if (!position){ 
    array.push(element);
    return array;
  }

  if (array.length <= position) {
    array[array.length] = element;

    return array;
  };

  for (let  i = 0, j = 0; i < array.length; i++, j++){
    if (i === position) {
      result[j++] = element;
      result[j] = array[i];
    } else result[j] = array[i];
  };

  return result;
};

let arr = [1, 4, 6, 2];
console.log(arr);
console.log(push(arr, 7, 2));
console.log(push(arr, 8, 3));
console.log(push(arr, 900));
