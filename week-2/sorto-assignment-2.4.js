/*
============================================
; Title:  sorto-assignment-2.4.js
; Author: Arlix Sorto
; Date:   6/7/2020
; Description: Assignment 2.4 - Functions
;===========================================
*/

/**Function: Concatenate the two parameters and then return as one string. */
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

/**Function: Return's a date */
function dateWriter(year, month, day) {
  var date = new Date(year, month, day);
  return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
}

/** Function: Format the number and return the number with decimals. */
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

/**Function: Converts the string number to an integer type.  */
function convertToInt(number) {
  return parseInt(number);
}

/*Function: Converts the string number to a float type */
function convertToFloat(number) {
  return parseFloat(number);
}

/**Outputs */
console.log(fullName("Arlix", "Sorto"));
console.log(dateWriter(2020, 6, 7));
console.log(formatNumber(25, 2));
console.log(convertToInt("24"));
console.log(convertToFloat("2.4"));
