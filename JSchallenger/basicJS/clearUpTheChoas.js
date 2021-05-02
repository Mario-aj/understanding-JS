/*
 * It seems like something happened to these strings
 * Can you figure out how to clear up the chaos?
 * Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
 * You might want to apply basic JS string methods such as replace(), split(), slice() etc
 */

function clearUpTheChoasInStrings(leftSide, rightSide) {
  function capitalize(str) {
    if (typeof str !== 'string') return;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  rightSide = rightSide.replace('%', '').split('');
  leftSide = capitalize(leftSide.replace('%', ''));
  let tmpRightSide = ''

  for(let i = (rightSide.length - 1); i>= 0; i--) tmpRightSide += rightSide[i];

  return (leftSide + tmpRightSide).replace('%', '');
};

console.log(clearUpTheChoasInStrings('java', 'tpi%rcs'));
