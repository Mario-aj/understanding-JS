let push = (array, element, position) => {
  let result = [];

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

let array = [1, 4, 6, 2];
console.log(array);
console.log(push(array, 7, 2));
console.log(push(array, 8, 3));
