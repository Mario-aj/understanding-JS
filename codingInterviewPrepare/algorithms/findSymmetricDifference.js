/**
 * Create a function that takes two or more arrays and returns an array of their symmetric difference.
 * The returned array must contain only unique values (no duplicates).
 */

function removeDuplicatedElement(target = []) {
  let result = [];

  for (let i = 0; i < target.length; i++) {
    let hasEqual = 0;

    for (let j = i + 1; j <= target.length; j++)
      if (target[i] === target[j]) hasEqual++;

    if (!hasEqual) result.push(target[i]);
  }

  return result;
}

function findSymmetricDifference(first = [], second = []) {
  let target = [...first, ...second];
  let result = [];
  let index = 0;

  target.forEach((item) => {
    let hasEqual = 0;

    for (let i = 0; i < target.length; i++)
      if (item === target[i] && index !== i) hasEqual++;

    if (!hasEqual) result.push(item);

    index++;
  });

  return result;
}

function symmetricDifference(...args) {
  const firstArg = args[0];
  let result = [];

  result = removeDuplicatedElement(firstArg);

  for (let i = 1; i < args.length; i++) {
    let current = removeDuplicatedElement(args[i]);
    result = findSymmetricDifference(result, current);
  }

  console.log(result.sort());
}

symmetricDifference([1, 2, 3], [5, 2, 1, 4]);
symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]);
symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]);
symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]);
symmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
symmetricDifference(
  [3, 3, 3, 2, 5],
  [2, 1, 5, 7],
  [3, 4, 6, 6],
  [1, 2, 3],
  [5, 3, 9, 8],
  [1]
);
