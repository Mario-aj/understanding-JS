let reduce = (func, array, initialValue) => {
  array.forEach((element) =>
    initialValue = func(initialValue, element));

  return initialValue;
};

let arr = [1, 2, 3, 4, 5];
console.log(reduce((acumulator, element) => acumulator + element, arr, 0));