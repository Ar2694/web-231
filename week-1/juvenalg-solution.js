/*
Title: Discussion 1.1 
Author: Juvenal Gonzalez
Date: 28 May 2020
Modified By: Arlix Sorto
Description: Example program with two errors to be debugged
*/
//Debug output for integer and string variable
var aNumber = 100;
console.log(aNumber);
var someString = 'Apostrophes aren\'t easy'; 
console.log(someString);

/** Arlix Solution
 * Line 10: The 'N' needs to be capitalized since JavaScript is a case-sensitive language.
 * Line 11: When using apostrophes in a string literal, use the backslash character before the apostrophes.
 */