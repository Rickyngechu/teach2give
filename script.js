"use strict";
// FOR THIS PROBLEMS I WILL BE USING JAVASCRIPT TO SOLVE THEM

/**
 * Question 1: FizzBuzz
Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
"FizzBuzz".
 */

for (let i = 0; i <= 100; i++) {
  console.log(i);
  // Checking for the multiples of 3
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  //   checking for the multiples of 5
  if (i === 0 || i.toString().split("").slice(-1)[0] === "0") {
    console.log("Buzz");
  }
  //   Checking for both multiples of 3 and 5
  if (i % 3 === 0 && (i === 0 || i.toString().split("").slice(-1)[0]) === "0") {
    console.log("FizzBuzz");
  }
}

/**
 *Question 2: Fibonacci Sequence
Write a program to generate the Fibonacci sequence up to 100.
 */

let n1 = 0,
  n2 = 1,
  nextTerm;
const fibonacciGenerator = function (terms) {
  console.log("Fibonacci Series:");

  for (let i = 1; i <= terms; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};
fibonacciGenerator(100);

/**
 * Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.
 */

const powerOfTwo = function (val) {
  return val % 2 === 0 ? true : false;
};
console.log(powerOfTwo(8));

/**
 * Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.
hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming"
 */

const capitalize = function (str) {
  return str.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1)}`);
};
console.log(capitalize("i love programming"));

/**
 * Question 5: Reverse Integer
 *Write a program that takes an integer as input and returns an integer with reversed digit 
ordering.
Examples:
For input 500, the program should return 005.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19.
 */

const reverseNumber = function (num) {
  const arrN = num.toString();

  //   check if a number is negative
  if (arrN.includes("-")) {
    return -arrN.split("").slice(1).reverse().join("");
  } else {
    return +arrN.split("").reverse().join("");
  }
};
console.log(reverseNumber(500));
console.log(reverseNumber(-56));

/**
 * Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2
 */

const countVowels = function (text) {
  let vowels = [];
  text.split("").map(t => {
    if (t === "a" || t === "e" || t === "i" || (t === "o") | (t === "u")) {
      vowels.push(t);
    }
  });

  const vowelSet = new Set(vowels);
  return vowelSet.size;
};
console.log(countVowels("Hello World"));
