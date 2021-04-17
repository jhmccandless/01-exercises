// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"

const finalFunction = function (num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push("input");
  }
  return arr;
};
