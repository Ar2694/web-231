/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 4.2"));
console.log("");

var fruitItems = ["Apple", "Orange", "Banana", "Mango", "Pear"];

function getFruit(fruits) {
  for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

getFruit(fruitItems);
