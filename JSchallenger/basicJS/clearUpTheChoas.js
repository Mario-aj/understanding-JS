/*
 * It seems like something happened to these strings
 * Can you figure out how to clear up the chaos?
 * Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
 * You might want to apply basic JS string methods such as replace(), split(), slice() etc
 */

function clearUpTheChoasInStrings(leftSide, rightSide) {

  rightSide = rightSide.replace('%', '');
  leftSide = leftSide.replace('%', '');

  
  let correctWord = leftSide + rightSide;
  return correctWord.replace('%', '');
};


// console.log(clearUpTheChoasInStrings('java', 'tpi%rcs'));

let str = 'java';

console.log(str);