//your JS code here. If required.
function findFirstNonRepeatingCharacter() {
  const input = prompt('Enter a string:');
  
  if (input === null || input.length === 0) {
    return null;
  }

  const charCount = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const result = findFirstNonRepeatingCharacter();
if (result) {
  alert('The first non-repeating character is: ' + result);
} else {
  alert('No non-repeating character found.');
}
