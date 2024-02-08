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
Examples: 
 */

const capitalize = function (str) {
  return str.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1)}`);
};
console.log(capitalize("i love programming"));
