let reduce = (func, array, initialValue) => {
  array.forEach((element) =>
    initialValue = func(initialValue, element));

  return initialValue;
};

let arr = [1, 2, 3, 4, 5];
console.log(reduce((acumulator, element) => acumulator + element, arr, 0));

let names = ['mario', 'alfredo', 'jorge'];
console.log(reduce((acumulator, element) => acumulator + ' ' + element, names, ''));

let person = [
  { name: 'Mario', dev: true },
  { name: 'Samuca', dev: true },
  { name: 'Elineth', dev: false },
  { name: 'Isabel', dev: false },
];
console.log(reduce((acumulator, element) => acumulator + ' ' + element.name, names, ''));
