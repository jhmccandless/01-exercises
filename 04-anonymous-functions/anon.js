"use strict";

/*
// function expression
const addExp = function (x, y) {
  const result = x + y;
  return result;
};

// arrow function
const addArrow = (x, y) => x + y;
const subArrow = (x, y) => x - y;
const multArrow = (x, y) => x * y;
const divideArrow = (x, y) => x / y;

const ans = addExp(2, 5);
const ans2 = addArrow(7, 40);
console.log(ans, ans2);

// apply method
// const ans3 = apply(2, 3, addExp);
// console.log(ans3);

const apply = (a, b, fn) => {
  const val = fn(a, b);
  return val;
};

const r1 = apply(3, 4, addArrow);
const r2 = apply(20, 5, subArrow);
const r3 = apply(4, 7, multArrow);
const r4 = apply(99, 9, divideArrow);

console.log(r1, r2, r3, r4);
*/

/*
// arrays as callbacks
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = nums[0];
for (let i = 1; i < nums.length; i++) {
  result1 += nums[i];
}

let result2 = nums[0];
for (let i = 1; i < nums.length; i++) {
  result2 -= nums[i];
}

const addArrow = (x, y) => x + y;
const subArrow = (x, y) => x - y;
const multArrow = (x, y) => x * y;
const divideArrow = (x, y) => x / y;

const reduce = function (arr, fn) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = fn(res, arr[i]);
  }
  return res;
};

const r1 = reduce(nums, addArrow);
const r2 = reduce(nums, subArrow);
const r3 = reduce(nums, multArrow);
const r4 = reduce(nums, divideArrow);

console.log(r1, r2, r3, r4);
// console.log(result1, result2);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * nums[i]);
}
// console.log(result);

const square = function (el) {
  return el * el;
};

const cube = function (el) {
  return el * el * el;
};

const reduce = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const r5 = reduce(nums, square);
const r6 = reduce(nums, cube);
console.log(r5, r6);
*/

// passing anonymous functions
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(isEven(5));
// console.log(isOdd(5));

const filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

// const result = filter(nums, isEven);
// console.log(result);
