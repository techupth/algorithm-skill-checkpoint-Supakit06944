// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const palindromeStr = str.split("").reverse().join("");
  if (palindromeStr === str) {
    return true;
  } else {
    return false;
  }
};

const str = "pennep";
const str2 = "awdawd";
console.log(palindrome(str));
