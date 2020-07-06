/*
Title: 6.1 Discussion
Author: Erica Perry
Date:7/2/2020
Modified: Arlix Sorto
Description: AT lease two errors:
*/

/*
const header = require('./header.js');
console.log(header.display("Erica", "Perry", " discussion 6.1"));
console.log('\n');
*/


try {
  // variables

  let x = 6; // My solution: Added semi-colon at the end of each variables
  let y = 7;
  const sum = x * y;
  // two errors
  // if statement ===
  if ( sum === 13 ) throw "Equal - Value" ;
  console.log (sum);// My solution: Removing the apostrophe should output the correct value of sum.

  // output
  // one error
  } catch ( err ) {
  console . log ( " Catch + clause: " + err );
  } finally {
  console . log ( "Finally clause: End of program..." );
  }

  /* My solution: Replace the single line comment with multi-line comment.
  expected output

  42
  Finally clause : End of program
*/
