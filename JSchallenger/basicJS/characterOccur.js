/**
 * Write a function that takes a two strings as arguments
 * Return the number of times the first string occurs in the second string
 */

function timesCharacterOccur(char, string) {
  let charFinded = 0;
  for (let elem of string)
    if (elem === char || elem.toLowerCase() === char)  charFinded++;

  return charFinded;
};


console.log(
  timesCharacterOccur(
    'm', 'How many times does the character occur in this sentence?'
  )
);

console.log(
  timesCharacterOccur(
    'h', 'How many times does the character occur in this sentence?'
  )
);

console.log(
  timesCharacterOccur(
    '?', 'How many times does the character occur in this sentence?'
  )
);

console.log(
  timesCharacterOccur(
    'z', 'How many times does the character occur in this sentence?'
  )
);
