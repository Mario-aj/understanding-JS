/**
 * Compare and update the inventory stored in a 2D array against a second 2D
 * array of a fresh delivery. Update the current existing inventory item
 * quantities (in arr1). If an item cannot be found, add the new item and
 * quantity into the inventory array. The returned inventory array should be in
 * alphabetical order by item.
 */

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
