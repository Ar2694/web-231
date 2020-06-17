/*
  Expected output:

  FirstName LastName
  Assignment 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Assignment 3.3"));
console.log("");

let eventKeyCode = 13

// Switch statement
switch(eventKeyCode) {

  case 13:

    console.log('The enter key was pressed.')

  break;

  case 16:

    console.log('The shift key was pressed.')

  break;

  case 32:

    console.log('The spacebar key was pressed.')

  break;

  case 8:

    console.log('The backspace / delete key was pressed.')

  break;

  default:

    console.log('Unrecognized key.')

  break;

  }
