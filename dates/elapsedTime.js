function elapsedTime(initial, final) {
  return final.getTime() - initial.getTime();
};

let diff = elapsedTime(new Date(1997, 10, 12, 56, 0, 60), new Date(2000, 03, 07, 30, 0, 0));
let diffDate = new Date(diff);

console.log(diffDate);
console.log(diffDate.getDate());

