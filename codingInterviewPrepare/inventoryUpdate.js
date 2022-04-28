function inventoryUpdate(currentInv = [], newInv = []) {
  let result = [];
  let indexes = [];
  for (let i = 0; i < currentInv.length; i++) {
    let updated = undefined;
    for (let j = 0; j < newInv.length; j++) {
      if (currentInv[i][1] === newInv[j][1]) {
        updated = [currentInv[i][0] + newInv[j][0], currentInv[i][1]];
        indexes.push(j);
      }
    }

    if (updated) {
      result.push(updated);
    } else {
      result.push(currentInv[i]);
    }
  }

  let filter = newInv.filter((_, index) => !indexes.includes(index));
  result = result.concat(filter);

  console.log(result);
}

inventoryUpdate(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
