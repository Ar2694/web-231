/*
  Expected output:

  Arlix Sorto
  Exercise 3.3
  6/9/2020

  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}


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
