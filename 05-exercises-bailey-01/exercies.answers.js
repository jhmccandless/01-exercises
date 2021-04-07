"use strict";

// # Javascript Exercises
// Hand in the exercises by 4/6/2021

/*
**********************************************************************************************
// ## Madlib

// Write a `madlib` function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// Example:

// ```javascript
// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'
// ```

//////////////////////////////////////////
////////// answer ////////////////////////
const madlib = function (name, subject) {
  return `${name}'s favorite subject in school is ${subject}.`;
};

console.log(madlib("Jason", "math"));
*/

/*
**********************************************************************************************
// ## Tip Calculator

// Write a function `tipAmount` that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// - good -> 20%
// - fair -> 15%
// - bad -> 10%

// ```
// > tipAmount(100, 'good')
// 20
// > tipAmount(40, 'fair')
// 6
// ```

////////////////////////////////////////
//////// answer 1 with if/else//////////
const recipt = 40;
const server = "fair";

const tipAmount = function (bill, service) {
  let tipPercent;
  if (service === "good") {
    tipPercent = 0.2;
  } else if (service === "fair") {
    tipPercent = 0.15;
  } else if (service === "bad") {
    tipPercent = 0.1;
  }
  const tip = bill * tipPercent;
  return tip;
};

console.log(tipAmount(recipt, server));

//////////////////////////////////////
///// answer 2 trying objects ////////
const custService = {
  good: 0.2,
  fair: 0.15,
  bad: 0.1,
};
const percentages = Object.keys(custService);

const tipCalc = function (bill, service) {
  let tipPerc = 0;
  for (let i = 0; i < percentages.length; i++) {
    if ((percentages[i] = service)) {
      tipPerc = custService[percentages[i]];
    }
  }
  let tip = bill;
  return tip;
};
console.log(tipCalc(40, "fair"));
*/

/*
**********************************************************************************************
## Tip Calculator 2

Write a function `totalAmount` that takes the same arguments as `tipAmount` except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

```
> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46
```


//////////////////////////////////////////
////////// answer ////////////////////////
const totalAmount = function (bill, service) {
  let tipPercent;
  if (service === "good") {
    tipPercent = 0.2;
  } else if (service === "fair") {
    tipPercent = 0.15;
  } else if (service === "bad") {
    tipPercent = 0.1;
  }
  const tip = bill * tipPercent;
  const total = bill + tip;
  return total;
};

console.log(totalAmount(40, "fair"));
*/

/*
**********************************************************************************************
## Print Numbers

Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

```
> printNumbers(1, 10)
1
2
3
4
5
6
7
8
9
10
```

Write two versions of the above function. One using a while loop and the other using a for loop.

//////////////////////////////////////////
////////// answer ////////////////////////
const printNumbersFor = function (start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};
printNumbersFor(1, 10);

const printNumbersWhile = function (start, end) {
  let i = start;
  while (i <= end) {
    console.log(i);
    i++;
  }
};

printNumbersWhile(1, 10);
*/

/*

## Print a Square
**********************************************************************************************
Write a function `printSquare` which is given a size and prints a square of that size using asterisks.

```
> printSquare(5)
*****
*****
*****
*****
*****
```

//////////////////////////////////////////
////////// answer ////////////////////////
const printSquare = function (size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push("*");
  }
  const x = arr.join("");
  for (let i = 0; i < size; i++) {
    console.log(x);
  }
};

printSquare(5);

*/

/*
**********************************************************************************************
## Print a box
Write function `printBox` which is given a width and height and prints a hollow box of those given dimensions.

```

> printBox(6, 4)
******
*    *
*    *
******
```

//////////////////////////////////////////
////////// answer ////////////////////////
const printBox = function (width, height) {
  let arrEnd = [];
  let arrMid = [];
  let arrSections = [];
  for (let i = 0; i < width; i++) {
    arrEnd.push("*");
    if (i === 0) {
      arrMid.push("*");
    } else if (i === width - 1) {
      arrMid.push("*");
    } else {
      arrMid.push(" ");
    }
  }
  arrSections.push(arrEnd.join(""), arrMid.join(""));

  for (let i = 0; i < height; i++) {
    if (i === 0) {
      console.log(arrSections[0]);
    } else if (i === height - 1) {
      console.log(arrSections[0]);
    } else {
      console.log(arrSections[1]);
    }
  }
};

printBox(7, 7);
*/

/*
**********************************************************************************************
## Print a Banner

Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

```
> printBanner('Welcome to DigitalCrafts')
****************************
* Welcome to DigitalCrafts *
****************************
```

//////////////////////////////////////////
////////// answer ////////////////////////
const banner = "Welcom to DigitalCrafts";
const printBanner = function (str) {
  // declaration banner line
  let arrMid = [];
  let arrEnd = [];
  for (let i = 0; i < str.length; i++) {
    arrMid.push(str[i]);
  }
  arrMid.push(" ", "*");
  arrMid.unshift("*", " ");

  for (let i = 0; i < arrMid.length; i++) {
    arrEnd.push("*");
  }
  const sections = [arrEnd.join(""), arrMid.join("")];
  const finalBanner = [sections[0], sections[1], sections[0]];
  for (const x of finalBanner) {
    console.log(x);
  }
};

printBanner(banner);
*/

/*
**********************************************************************************************
## Leetspeak

Write a function `leetspeak` which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

- A => 4
- E => 3
- G => 6
- I => 1
- O => 0
- S => 5
- T => 7

```
> leetspeak('Leet')
l337
```


//////////////////////////////////////////
////////// answer ////////////////////////
const string = "loot";
const leetTrans = {
  A: 4,
  E: 3,
  G: 6,
  I: 1,
  O: 0,
  S: 5,
  T: 7,
};
const leetspeak = function (str) {
  const strUC = str.toUpperCase();
  const strUpdate = [];
  for (let i = 0; i < strUC.length; i++) {
    if (leetTrans[strUC[i]] !== undefined) {
      strUpdate.push(leetTrans[strUC[i]]);
    } else {
      strUpdate.push(strUC[i].toLowerCase());
    }
  }
  const x = strUpdate.join("");
  console.log(x);
};
leetspeak(string);
*/

/*
**********************************************************************************************
## Long-long Vowels

Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

```
> longLongVowels('Good')
'Goooood'
> longLongVowels('Cheese')
'Cheeeeese'
> longLongVowels('Man')
'Man'
```


//////////////////////////////////////////
////////// answer ////////////////////////
const word = "Man";
// const vowelExt = 5;
const longVowels = function (str) {
  const longWord = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      longWord.push(str[i], str[i], str[i], str[i]);
    } else {
      longWord.push(str[i]);
    }
  }
  const backToStr = longWord.join("");
  console.log(backToStr);
};

longVowels(word);
*/

/*
**********************************************************************************************
## Just the positives

Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

```
> positiveNumbers([1, -3, 5, -3, 0])
[1, 5, 0]
> positiveNumbers([1, 2, 3])
[1, 2, 3]
> positiveNumbers([-1, -2, -3])
[]
```


//////////////////////////////////////////
////////// answer ////////////////////////
const positiveNumbers = function (arr) {
  const posArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      posArr.push(arr[i]);
    }
  }
  console.log(posArr);
};

positiveNumbers([-1, -2, -3, 6]);
*/

/*
**********************************************************************************************
## Bonus: Caesar Cipher

Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

```
> cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
```


//////////////////////////////////////////
////////// answer ////////////////////////
const alph = "abcdefghijklmnopqrstuvwxyz";
const string = "Genius without education is like silver in the mine";
const [...alphArr] = alph;
const [...origAlph] = alph;

const cipher = function (str, offset) {
  let codeStr = [];
  let upperCaseIndex = [];
  const upperCaseCheck = function (stringArray) {
    for (let i = 0; i < stringArray.length; i++) {
      if (
        stringArray[i] == stringArray[i].toUpperCase() &&
        stringArray[i] !== " "
      ) {
        upperCaseIndex.push(i);
      }
    }
  };
  upperCaseCheck(string);
  const alphToCipher = function (alphebet) {
    for (let i = 0; i < alphebet.length - offset; i++) {
      alphArr.push(alphebet[i]);
      alphArr.shift(alphebet);
    }
  };
  alphToCipher(alph);
  const [...strArr] = str.toLowerCase();
  for (let i = 0; i < strArr.length; i++) {
    let letter = alphArr[origAlph.indexOf(strArr[i])];
    if (upperCaseIndex.includes(i)) {
      let letterToUC = letter.toUpperCase();
      codeStr.push(letterToUC);
    } else if (strArr[i] !== " ") {
      codeStr.push(letter);
    } else {
      codeStr.push(" ");
    }
  }
  console.log(codeStr.join(""));
};

cipher(string, 10);
*/
/*
**********************************************************************************************
## Bonus: Caesar Cipher 2

Write a function decipher which is given a string, an offset, and returns the original message.

```
> decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', offset)
'Genius without education is like silver in the mine'
```


//////////////////////////////////////////
////////// answer ////////////////////////
// **********
// able to use the same code from cipher??? just changed the name to decipher
// **********

const alph = "abcdefghijklmnopqrstuvwxyz";
const string = "Wudyki myjxekj utksqjyed yi byau iybluh yd jxu cydu";
const [...alphArr] = alph;
const [...origAlph] = alph;

const decipher = function (str, offset) {
  const codeStr = [];
  const upperCaseIndex = [];
  const upperCaseCheck = function (stringArray) {
    for (let i = 0; i < stringArray.length; i++) {
      if (
        stringArray[i] == stringArray[i].toUpperCase() &&
        stringArray[i] !== " "
      ) {
        upperCaseIndex.push(i);
      }
    }
  };
  upperCaseCheck(string);
  const alphToCipher = function (alphebet) {
    for (let i = 0; i < alphebet.length - offset; i++) {
      alphArr.push(alphebet[i]);
      alphArr.shift(alphebet);
    }
  };
  alphToCipher(alph);
  const [...strArr] = str.toLowerCase();
  for (let i = 0; i < strArr.length; i++) {
    let letter = alphArr[origAlph.indexOf(strArr[i])];
    if (upperCaseIndex.includes(i)) {
      let letterToUC = letter.toUpperCase();
      codeStr.push(letterToUC);
    } else if (strArr[i] !== " ") {
      codeStr.push(letter);
    } else {
      codeStr.push(" ");
    }
  }
  console.log(codeStr.join(""));
};

decipher(string, 10);
*/

/*
# Function Exercises


Implement all of the following problems without using a while or a for loop unless you were explicitly asked to use loops.

**********************************************************************************************
## Even Numbers

Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

//////////////////////////////////////////
////////// answer ////////////////////////
const evenNumber = function (arr) {
  const arrStr = [];
  const arrLastDig = [];
  const evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    arrStr.push(arr[i].toString());
  }
  for (let i = 0; i < arrStr.length; i++) {
    arrLastDig.push(Number(arrStr[i][arrStr[i].length - 1]));
  }
  for (let i = 0; i < arrLastDig.length; i++) {
    if (!(arrLastDig[i] % 2)) {
      evenArr.push(arr[i]);
    }
  }
  console.log(evenArr);
};

evenNumber([-2, 3.4, 4, 5.2, 6]);
*/

/*
**********************************************************************************************
## Square the Numbers

Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.

//////////////////////////////////////////
////////// answer ////////////////////////
const numSquare = function (arr) {
  const evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    evenArr.push(arr[i] ** 2);
  }
  console.log(evenArr);
};

numSquare([-2, 3, 4, -25, 6]);
*/

/*
**********************************************************************************************
## Cities

Write a function which takes an array of city objects like such:

```
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
```

as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

//////////////////////////////////////////
////////// answer ////////////////////////
var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];

const mildCities = function (city) {
  const cityNames = [];
  for (let i = 0; i < city.length; i++) {
    if (city[i].temperature < 70) {
      cityNames.push(city[i].name);
    }
  }
  console.log(cityNames);
};

mildCities(cities);
*/

/*
**********************************************************************************************
## Good Job!

Given an array of people's names:

```
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
```

Print out `'Good Job, {{name}}!'` for each person's name, one on a line.
//////////////////////////////////////////
////////// answer ////////////////////////
const people = [
  "Dom",
  "Lyn",
  "Kirk",
  "Autumn",
  "Trista",
  "Jesslyn",
  "Kevin",
  "John",
  "Eli",
  "Juan",
  "Robert",
  "Keyur",
  "Jason",
  "Che",
  "Ben",
];

for (const individual of people) {
  console.log(`Good Job, ${individual}!`);
}
*/

/*
**********************************************************************************************
## Sort an array

Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

//////////////////////////////////////////
////////// answer ////////////////////////
const people = [
  "Dom",
  "Lyn",
  "Kirk",
  "Autumn",
  "Trista",
  "Jesslyn",
  "Kevin",
  "John",
  "Eli",
  "Juan",
  "Robert",
  "Keyur",
  "Jason",
  "Che",
  "Ben",
];

people.sort();
console.log(people);
*/

/*
**********************************************************************************************
## Sort an array, 2

Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.


//////////////////////////////////////////
////////// answer ////////////////////////
const people = [
  "Dom",
  "Lyn",
  "Kirk",
  "Autumn",
  "Trista",
  "Jesslyn",
  "Kevin",
  "John",
  "Eli",
  "Juan",
  "Robert",
  "Keyur",
  "Jason",
  "Che",
  "Ben",
];

people.sort(function (a, b) {
  return a.length - b.length;
});

console.log(people);
*/

/*
**********************************************************************************************
## 3 times

Given this function:

```
function call3Times(fun) {
  fun();
  fun();
  fun();
}
```

Use the `call3Times` function to print "Hello, world!" 3 times.

const str = function () {
  console.log("Hello, world!");
};
function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(str);
*/

/*
**********************************************************************************************
## n times

You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

```
> callNTimes(5, hello)
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!
```

You are allowed to use a loop in the implementation of callNTimes.

//////////////////////////////////////////
////////// answer ////////////////////////
const str = function () {
  console.log("Hello, world!");
};
function callNTimes(fun, n) {
  for (let i = 0; i < n; i++) {
    fun();
  }
}
callNTimes(str, 5);
*/

/*

**********************************************************************************************## Sum an array

Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

```
> sum([1, 2, 3])
6
```

//////////////////////////////////////////
////////// answer ////////////////////////
const nums = [5, 2, 3];
const sum = function () {
  const total = function (init, el) {
    return init + el;
  };
  let summation = nums.reduce(total);

  console.log(summation);
};

sum(nums);
*/

/*
**********************************************************************************************
## Acronym

Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

```
> acronym(['very', 'important', 'person'])
'VIP'
> acronym(['national', 'aeronautics', 'space', 'administration'])
'NASA'
```

//////////////////////////////////////////
////////// answer ////////////////////////
const words = ["very", "important", "person"];
const words2 = ["national", "aeronautics", "space", "administration"];
const acronym = function (arr) {
  const wordBegin = [];
  for (let i = 0; i < arr.length; i++) {
    wordBegin.push(arr[i][0]);
  }
  const allFirstLetters = function (init, el) {
    return init + el;
  };
  const summation = wordBegin.reduce(allFirstLetters).toUpperCase();
  console.log(summation);
};

acronym(words);
acronym(words2);
*/

/*
**********************************************************************************************
## Bonus: forEach

Implement your own custom `forEach` function which takes two arguments: an array `arr` and a function `fun`. It will call fun passing each item in `arr` to `fun` as the first argument. Example:

```
var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});
```

The above program will print:

```
Hello, Bob!
Hello, Alice!
Hello, Joe!
```

You can use a loop in the implementation of this function.

//////////////////////////////////////////
////////// answer ////////////////////////
const arr = [{ name: "Bob" }, { name: "Alice" }, { name: "Joe" }];

const forEach = function (list, func) {
  for (let i = 0; i < list.length; i++) {
    func(list[i]);
  }
};
/*
# Closure Exercises

**********************************************************************************************
## Counter

Make a counter function that returns a function that returns a successive number each time it is called.

```
> var count1 = counter()
> var count2 = counter()
> count1()
1
> count1()
2
> count2()
1
> count2()
2
> count1()
3
```

//////////////////////////////////////////
////////// answer ////////////////////////
function counter() {
  let x = 0;
  return function () {
    return (x += 1);
  };
}

const count1 = counter();
const count2 = counter();
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count1());
*/

/*
**********************************************************************************************
## Counter 2

Allow the caller of counter to initialize the count to the first argument that's passed in.

```
> var count1 = counter(4)
> count1()
5
> count1()
6
```

//////////////////////////////////////////
////////// answer ////////////////////////

function counter(x) {

  return function () {
    return (x += 1);
  };
}

const count1 = counter(4);
console.log(count1());
console.log(count1());
*/
