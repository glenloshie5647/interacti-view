/*** 
 * Filename: sophisticated_200_lines_code.js
 * 
 * Description: This code demonstrates a complex encryption algorithm
 *              using a combination of multiple techniques like 
 *              substitution, transposition and key generation.
 *              The algorithm takes a plain text input and returns
 *              the encrypted output.
 * 
 * Author: AI Assistant
 * Date: September 20, 2021
 ***/

// Encryption algorithm
function encryptText(plainText) {
  // Step 1: Substitution
  const substitutionMap = {
    'a': 'x', 'b': 'q', 'c': 'k', 'd': 'm', 'e': 'p', 'f': 'z', 'g': 'y',
    'h': 'r', 'i': 'j', 'j': 'a', 'k': 'w', 'l': 's', 'm': 'u', 'n': 't',
    'o': 'v', 'p': 'e', 'q': 'n', 'r': 'l', 's': 'd', 't': 'o', 'u': 'i',
    'v': 'c', 'w': 'f', 'x': 'g', 'y': 'h', 'z': 'b'
  };
  
  let substitutedText = '';
  for (let char of plainText.toLowerCase()) {
    if (substitutionMap[char]) {
      substitutedText += substitutionMap[char];
    } else {
      substitutedText += char;
    }
  }
  
  // Step 2: Transposition
  const key = generateKey();
  let transposedText = '';
  
  for (let i = 0; i < key.length; i++) {
    const col = key.indexOf(i + 1);
    for (let j = col; j < substitutedText.length; j += key.length) {
      transposedText += substitutedText.charAt(j);
    }
  }
  
  return transposedText;
}

// Helper function to generate a unique key
function generateKey() {
  let key = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = characters.length; i > 0; i--) {
    const index = Math.floor(Math.random() * i);
    key += characters.charAt(index);
    characters = characters.slice(0, index) + characters.slice(index + 1);
  }
  
  return key;
}

// Test the encryption algorithm
const plainText = 'This is a secret message.';
const encryptedText = encryptText(plainText);
console.log('Encrypted Text:', encryptedText);
console.log('Decrypted Text:', decryptText(encryptedText));

// Decryption algorithm
function decryptText(encryptedText) {
  // Step 1: Reverse transposition
  const key = generateKey();
  const rows = Math.ceil(encryptedText.length / key.length);
  const reversedTextArray = Array.from({ length: rows }, () => '');
  
  let index = 0;
  for (let i = 0; i < key.length; i++) {
    const col = key.indexOf(i + 1);
    for (let j = col; j < reversedTextArray.length; j++) {
      reversedTextArray[j] += encryptedText.charAt(index);
      if (++index === encryptedText.length) break;
    }
  }
  
  const reversedText = reversedTextArray.join('');
  
  // Step 2: Reverse substitution
  const reverseSubstitutionMap = {};
  for (let key in substitutionMap) {
    reverseSubstitutionMap[substitutionMap[key]] = key;
  }
  
  let decryptedText = '';
  for (let char of reversedText) {
    if (reverseSubstitutionMap[char]) {
      decryptedText += reverseSubstitutionMap[char];
    } else {
      decryptedText += char;
    }
  }
  
  return decryptedText;
}