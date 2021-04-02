"use strict";

// # Javascript Exercises
// Hand in the exercises by 4/6/2021

/*
// ## Madlib

// Write a `madlib` function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// Example:

// ```javascript
// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'
// ```

const madlib = function (name, subject) {
  return `${name}'s favorite subject in school is ${subject}.`;
};

console.log(madlib("Jason", "math"));
*/

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
  const total = bill + tip;
  return `The bill was $${bill} with ${service} service earning a tip of ${
    tipPercent * 100
  }% making the total $${total}.`;
};

console.log(tipAmount(30, "bad"));

// const custService = {
//   good: 0.2,
//   fair: 0.15,
//   bad: 0.1,
// };
// const percentages = Object.entries(custService);
// console.log(percentages);

// const tipAmount = function (bill, service) {
//   bill = 100;
//   service = percentages[i];
// };
// console.log(tipAmount(30, "fair"));

/*
## Tip Calculator 2

Write a function `totalAmount` that takes the same arguments as `tipAmount` except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

```
> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46
```

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

## Print a Square

Write a function `printSquare` which is given a size and prints a square of that size using asterisks.

```
> printSquare(5)
*****
*****
*****
*****
*****
```

## Print a box

Write function `printBox` which is given a width and height and prints a hollow box of those given dimensions.

```
> printBox(6, 4)
******
*    *
*    *
******
```

## Print a Banner

Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

```
> printBanner('Welcome to DigitalCrafts')
****************************
* Welcome to DigitalCrafts *
****************************
```

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

## Bonus: Caesar Cipher

Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

```
> cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
```

## Bonus: Caesar Cipher 2

Write a function decipher which is given a string, an offset, and returns the original message.

```
> decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', offset)
'Genius without education is like silver in the mine'
```

# Function Exercises

Implement all of the following problems without using a while or a for loop unless you were explicitly asked to use loops.

## Even Numbers

Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

## Square the Numbers

Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.

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

## Sort an array

Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

## Sort an array, 2

Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

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

## Sum an array

Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

```
> sum([1, 2, 3])
6
```

## Acronym

Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

```
> acronym(['very', 'important', 'person'])
'VIP'
> acronym(['national', 'aeronautics', 'space', 'administration'])
'NASA'
```

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

# Closure Exercises

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

## Counter 2

Allow the caller of counter to initialize the count to the first argument that's passed in.

```
> var count1 = counter(4)
> count1()
5
> count1()
6
```
*/
