const find = (func, array) => {
  for (i = 0; i < array.length; i++)
    if(func(array[i])) return array[i];

  return undefined;
};

let countries = ['Russia', 'Ghana', 'Chine', 'Brazil', 'Angola', 'Namibia', 'Spain'];

let country = find((elem) => elem === 'Zambia', countries);
console.log(country)
country = find((elem) => elem === 'Angola', countries);
console.log(country);
country = find((elem) => elem === 'Benin', countries);
console.log(country);
country = find((elem) => elem === 'Ghana', countries);
console.log(country);
