// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

// export const getMaxCharacters = (string) => {
//     const final = []
//  for(let i of string){
//     const array = [i]
//     console.log(i)
//     console.log(array)

//  }
// };
export const getMaxCharacters = (str) => {
  const charMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }
  return maxChar;
};

const str = "abcccccccd";
console.log(getMaxCharacters(str));
