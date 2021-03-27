"use strict";
/*
// Numbers
const makeANumber = function () {
  const myNum = 23;
  return myNum;
};

const makeAnInteger = function () {
  const myInt = 20;
  return myInt;
};

const makeAFloat = function () {
  const myFloat = 3.45;
  return myFloat;
};

const makeZero = function () {
  const zilch = 0;
  return zilch;
};

// Boolean, undefined, null
const makeNothing = function () {
  const huh;
  return huh;
};

const makeBoolean = function () {
  const myBool = true;
  return myBool;
};

const makeTrue = function () {
  const yep = true;
  return yep;
};

const makeFalse = function () {
  const nope = false;
  return nope;
};

const makeNull = function () {
  const nothingMuch = null;
  return nothingMuch;
};

const helloWorld = function () {
  const str = "Hello World!";
  return str;
};

const helloName = function (name) {
  const str = `Hello ${name}`;
  return str;
};

const abstractLength = function () {
  const tarPitAbstract =
    "Complexity is the single major difficulty in the successful development of large-scale software systems. " +
    "Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. " +
    "We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. " +
    "To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.";
  const absLength = tarPitAbstract.length; //length of string;
  return absLength;
};

const makeLoud = function () {
  const chorus = "Who let the dogs out?";
  const loud = chorus.toUpperCase();
  return loud;
};

const yelling = `I'm LOUD!`;
const makeQuiet = function (str) {
  const quiet = str.toLowerCase();
  return quiet;
};

makeQuiet(yelling);

// Math
const add99 = function (num) {
  const ans = num + 99;
  return ans;
};

const addNums = function (num1, num2) {
  const ans = num1 + num2;
  return ans;
};

const subtractNums = function (num1, num2) {
  const ans = num1 - num2;
  return ans;
};

const multiplyNums = function (num1, num2) {
  const ans = num1 * num2;
  return ans;
};

const divideNums = function (num1, num2) {
  const ans = num1 / num2;
  return ans;
};

const modNums = function (num1, num2) {
  const ans = num1 % num2;
  return ans;
};

const threeFruits = function () {
  const fruit = ["banana", "strawberry", "apple"];
  return fruit;
};

const multipleTypes = function () {
  const diverseArray = [
    "Skateboard",
    null,
    8.75,
    "Eiffel Tower",
    44,
    7,
    true,
    null,
  ];
  return diverseArray;
};

const indexAccess = function () {
  const people = ["John", "Sue", "Jim", "Billy", "Joe", "Mary"];
  return people[2];
};

const useLength = function () {
  const arr = ["a", "b", "c"];
  return arr.length;
};

const usePush = function () {
  const arr = ["a", "b", "c"];
  arr.push("d");
  return arr;
};

const useIndexOf = function () {
  const arr = ["C", "A", "G", "T", "A", "A", "G", "T"];
  return arr.indexOf("p");
};
*/

// Objects
// Objects are collections of key/value pairs. You use them all the time in programming.
//
// Useful reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can create an Object using the {} characters.
// Note the commas between the items.
// Return the object of numbers in the function below.

function threeNumbers() {
  const numbers = { numberOne: 1, numberTwo: 2, numberThree: 3 };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// An Object can contain any type for each property. ie: strings, numbers, boolean, etc
// Return the object of values in the function below.

function manyTypes() {
  const diverseObject = { name: "banana", count: 42, isDelicious: true };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can access individual values of an object using bracket notation shown below.
// This allows you to write the label (key) assigned to the value and get the value back.
// All Object keys are strings.
// Return the name of the bestFruit Object below.

function keyAccess() {
  const bestFruit = { name: "banana", count: 42, isDelicious: true };

  // console.assert() allows you to declare things that should be true; it's like
  // a sanity-check for your code.
  // Here we are confirming that object access works like we expect:
  console.assert(bestFruit["name"] === "banana");
  console.assert(bestFruit["count"] === 42);
  console.assert(bestFruit["isDelicious"] === true);

  // return the name of the bestFruit Object here.
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can add properties to an Object by assigning a value to a new key.
// Add the property 'color' and assign it the string 'yellow' in the bestFruit object below.
// Then return the object.

function addKey() {
  const bestFruit = { name: "banana", count: 42 };

  // Note that before a key is assigned it will always return `undefined`
  console.assert(bestFruit["isDelicious"] === undefined);
  bestFruit["isDelicious"] = true;
  console.assert(bestFruit["isDelicious"] === true);

  // Assign 'yellow' to the key 'color' of bestFruit here and return bestFruit
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// When an Object gets large, it is normal to define its properties one-per-line as shown below.
// Create your own object named bootcampStudent and give it 8 properties similar to
// the bootcampInstructor object.
// Return your bootcampStudent object.

function largeObject() {
  const bootcampInstructor = {
    name: "Susan",
    email: "susan@bootcamp.digitalcrafts",
    age: 32,
    heightFeet: 5.5,
    favoriteColor: "green",
    homeTown: "Houston",
    pet: "cat",
    ownsCar: true,
  };
  // create a bootcampStudent object here similar to bootcampInstructor and return it
  // Jason's Code:
  const bootcampStudent = {
    name: "Jason",
    email: "jhmccandless1105@gmail.com",
    age: 30,
    heightFeet: 5.75,
    favoriteColor: "green",
    homeTown: "Fort Worth",
    pet: false,
    ownsCar: true,
  };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Objects aren't restricted to containing only JavaScript primitive types.
// Remember, JavaScript primitive types include string, number, boolean, null...
// Here is an object which contains a nested array.
// Return the second item in the array favoriteFoods.

function nestedArray() {
  const bootcampInstructor = {
    name: "Susan",
    favoriteColor: "green",
    favoriteFoods: ["chicken pot pie", "salmon", "pho"],
  };

  // Note that you can chain the bracket notation to reach into the Object AND into the Array.
  console.assert(bootcampInstructor["favoriteFoods"][0] === "chicken pot pie");

  // Return the second item of the nested array favoriteFoods
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// When working with Objects, it is most common to use the dot notation to access properties.
// Bracket notation is more flexible, but dot notation is a more convenient, readable syntax.
// Useful Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
//
// Return the name of the bootcampInstructor Object below

function dotNotation() {
  const bootcampInstructor = {
    name: "Susan",
    favoriteColor: "green",
    favoriteFoods: ["chicken pot pie", "salmon", "pho"],
  };
  // Jason's Code
  return bootcampInstructor.name;

  // Some examples of using dot notation vs bracket notation:
  console.assert(bootcampInstructor.name === "Susan");
  console.assert(bootcampInstructor["name"] === "Susan");
  const nameString = "name";
  console.assert(bootcampInstructor[nameString] === "Susan");

  console.assert(bootcampInstructor.favoriteColor === "green");
  console.assert(bootcampInstructor["favoriteColor"] === "green");
  console.assert(bootcampInstructor["favorite" + "Color"] === "green");

  console.assert(bootcampInstructor["favoriteFoods"][0] === "chicken pot pie");
  console.assert(bootcampInstructor.favoriteFoods[0] === "chicken pot pie");

  // Return the name of the bootcampInstructor Object using dot notation
}
