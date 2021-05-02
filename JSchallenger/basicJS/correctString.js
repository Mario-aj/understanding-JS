/**
 * Write a function that takes a string as argument
 * As it is, the string has no meaning
 * Increment each letter to the next letter in the alphabet
 * Return the correct word
 */

function unencrypted(encryptedWord) {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o','p','q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'
  ];

  encryptedWord = encryptedWord.split('');
  let unencryptedWord = '';

  for (let char of encryptedWord) {
    let index = alphabet.indexOf(char);
    unencryptedWord += alphabet[index + 1]; 
  };

  return unencryptedWord;
}

console.log(unencrypted('bnchmf'));