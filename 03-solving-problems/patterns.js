"use strict";

// This is me following along with the lesson to better understand how each section operates
/*
// cookie example

let n = 5;
let conversation = "";
while (n > 0) {
  if (n % 2 !== 0) {
    // console.log(`${n} cookie: me`);
    conversation += `one for me,`;
    if (n === 1) {
      // if n = 1, the cookie was already given out and none for the next person. n=0 is too late.
      conversation += `none for you.`;
    }
  } else {
    // console.log(`${n} cookie: you`);
    conversation += "one for you\n";
    if (n === 1) {
      conversation += `none for me.`;
    }
  }
  n--;
}

console.log(conversation);

// console.log(conversation);
// console.log(n);
*/

/*
// counting items in an array
// need at least 6, 5 start ratings to be featured
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
let count = 0;
for (let i = 0; i < max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    count++;
    // console.log(stars);
  }
}

if (count >= 6) {
  console.log(`This is a featured product!`);
} else {
  console.log(`Sorry, your product is not good.`);
}
*/

/*
// summing arrays
const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
const max = c1Votes.length;
let c1Total = 0;
let c2Total = 0;
for (let i = 0; i < max; i++) {
  c1Total += c1Votes[i];
  c2Total += c2Votes[i];
}

if (c1Total > c2Total) {
  console.log(`Contestant 1 wins by ${c1Total - c2Total} votes.`);
} else if (c1Total < c2Total) {
  console.log(`Contestant 2 wins by ${c2Total - c1Total} votes.`);
} else {
  console.log(`Contest is a tie.`);
}
*/

/*
// Searching
// the guests correspond to the same index # of the table array
const guests = ["Scarlett", "Plum", "Peacock", "Green", "Mustard", "White"];
const tables = [3, 1, 1, 2, 3, 2];
// const guestOfInterest = "Mustard";

const indexFor = function (guest) {
  let foundIndex = undefined;
  for (let i = 0; i < guests.length; i++) {
    if (guests[i] === guest) {
      foundIndex = i;
      break;
    }
  }
  console.log(foundIndex);
  return foundIndex;
};

const getTableFor = function (guest) {
  let index = indexFor(guest);
  const guestTable = tables[index];
  if (index) {
    console.log(`${guest} sits at table ${guestTable}.`);
  } else {
    console.log(`${guest} is not at the party.`);
  }
};
indexFor("batman");
indexFor("Mustard");
getTableFor("harry");
*/

/*
// finding a substring
const HEALTHY = "GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC";
let sample1 = "GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC";
let sample2 = "GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC";

// Lesson's way of doing it
// let sequence = [];
// for (let i = 0; i < sample2.length; i++) {
//   //   sequence.push(sample2[i]);
//   const letter = sample1[i];
//   if (letter === "Z") {
//     sequence.push(HEALTHY[i]);
//   } else {
//     sequence.push(sample1[i]);
//   }
// }

// My Trial
let sequence = [];
console.log(sample2[4]);
console.log(HEALTHY[4]);
for (let i = 0; i < sample2.length; i++) {
  if (sample2[i] === HEALTHY[i]) {
    sequence.push(sample2[i]);
  } else {
    sequence.push(HEALTHY[i]);
  }
}

sequence = sequence.join("");

console.log(sequence);

console.log(sample1.length);
console.log(sample2);
*/

// in an object
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const ratingsCount = {};
for (let i = 0; i < max; i++) {
  //   const stars = ratings[i];
  //   if (ratingsCount[stars]) {
  //     ratingsCount[stars]++;
  //   } else {
  //     ratingsCount[stars] = 1;
  //   }

  const stars = ratings[i];
  if (ratingsCount[stars]) {
    ratingsCount[stars]++;
  } else {
    ratingsCount[stars] = 1;
  }
}

console.log(ratingsCount);
