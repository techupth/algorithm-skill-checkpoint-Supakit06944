// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]
const numbers = [-10, -40, -20, -2, -9, -19];

export const getTop2MaxNumbers = (numbers) => {
  let zero = 0;
  let zeroTwo = 0;
  numbers.map((num, index) => {
    if (num > zero || index == 0) {
      zeroTwo = zero;
      zero = num;
    } else if ((num !== zero && num > zeroTwo) || index == 0) {
      zeroTwo = num;
    }
  });
  return [zero, zeroTwo];
};

const test = getTop2MaxNumbers(numbers);
console.log(test);
