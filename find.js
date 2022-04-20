function diffArray(...args) {
  const [a, b] = args;
  let r = [];

  r.push(...compare(a, b));
  r.push(...compare(b, a));

  console.log("v1: ", r);
}

function diffArrayV2(...args) {
  const [a, b] = args;
  let r = [];

  r.push(...compareV2([...a, ...b]));

  console.log("v2: ", r);
}

function compare(a = [], b = []) {
  let r = [];

  a.forEach((i) => {
    let hasEqual = 0;
    b.forEach((j) => {
      if (j === i) hasEqual++;
    });

    if (hasEqual === 0) r.push(i);
  });

  return r;
}

function compareV2(a = []) {
  console.log("vvvvvvvv", a);
  let r = [];

  console.log(a);
  return r;
}

diffArray([1, 2, 3, 1], [2, 3, 4]);
// diffArray(
//   ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// );
// diffArray(
//   ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// );
// diffArray(
//   ["andesite", "grass", "dirt", "dead shrub"],
//   ["andesite", "grass", "dirt", "dead shrub"]
// );
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

console.log("****************************************");
diffArrayV2([1, 2, 3], [2, 3, 4]);
// diffArrayV2(
//   ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// );
// diffArrayV2(
//   ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// );
// diffArrayV2(
//   ["andesite", "grass", "dirt", "dead shrub"],
//   ["andesite", "grass", "dirt", "dead shrub"]
// );
// diffArrayV2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArrayV2([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// diffArrayV2([], ["snuffleupagus", "cookie monster", "elmo"]);
// diffArrayV2([1, "calf", 3, "piglet"], [7, "filly"]);
