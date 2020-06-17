/*

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Assignment 3.4"));
console.log("");


var myNumber = 6;

console.log(" -- DO THE NUMBERS MATCH GAME --");

//Each iteration will compare two numbers and then output result.
for (var i = 0; i < 10; i++) {
  var randomNum = randomNumber();

  if (match(myNumber, randomNum)) {
    console.log(logMatch(myNumber, randomNum));
  } else {
    console.log(logMismatch(myNumber, randomNum));
  }
}
//Function: Generate a random number.
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
//Function: Compares two values and return's a boolean.
function match(value1, value2) {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}

//Function: Return's a string if values do not match.
function logMismatch(value1, value2) {
  if (value1 !== value2) {
    return value1 + " does not match " + value2 + "!";
  }
}

//Function: Return's a string if values do match.
function logMatch(value1, value2) {
  if (value1 === value2) {
    return value1 + " does match " + value2 + "!";
  }
}
