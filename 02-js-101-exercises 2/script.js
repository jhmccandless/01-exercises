"use strict";

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
