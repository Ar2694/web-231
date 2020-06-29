
const header = require('../sorto-header.js');/*** My header file has a different name */

console.log(header.display("Karina", "Alvarez", "Discussion Board 5.1 - Advanced Arrays"));
console.log ('\n');
/*
============================================
; Title:  Discussion Board
; Author: Karina Alvarez
; Date:   23 June 2020
; Modified by: Arlix Sorto
; Description: Create a Javascript program with
; two or more errors.
;===========================================
*/

// Start of project

// one error bellow
// map() object
let emoji = new Map();
emoji.set('🚗', 'car');
emoji.set('🍕', 'pizza');
emoji.set('😄 ', 'grinning face'); /** Solution: Enclosed the key and value with apostrophes since both of the values are string types.*/
emoji.size;

// one error bellow
// for loop output
// Output is :
// 🚗  : car
// 🍕  : pizza
// 😄  : grinning face
for (let [key, value] of emoji) { /** Solution: Replace the curly braces with square brackets*/
  console.log(key + ' : ' + value);
}

//two errors below
// Output
console.log('\n'); // new line
console.log(emoji.get('🍕')); // output is -> pizza /* Solution: Replaced the comma with a period in the console.log */
console.log(emoji.has('🚗')); // output is -> true /* Solution: Added a parenthesis at the end of the console.log */

// end of program
