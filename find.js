function removeDuplicatedElement(arr = []) {
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    let e = 0;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) e++;
    }

    if (!e) r.push(arr[i]);
  }

  return r;
}

function findSymmetricDifference(target = []) {
  let value = [];
  let position = 0;

  target.forEach((item) => {
    let hasEqual = 0;

    for (let i = 0; i < target.length; i++) {
      if (item === target[i] && position !== i) {
        hasEqual++;
      }
    }

    if (hasEqual === 0) value.push(item);

    position++;
  });

  return value;
}

function symmetricDifference(...args) {
  const twoFirst = [args[0], args[1]];
  let result = [];

  twoFirst.forEach((arg) => {
    result.push(...removeDuplicatedElement(arg));
  });

  result = findSymmetricDifference(result);

  for (let i = 2; i < args.length; i++) {
    let current = removeDuplicatedElement(args[i]);
    result = findSymmetricDifference([...result, ...current]);
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
