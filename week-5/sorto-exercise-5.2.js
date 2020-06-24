/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/


/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 5.2"));
console.log("");


var foodArray =  ["Pizza", "Hamburger", "Ice Cream", "Steak", "Tacos"];

//Ouput each food items.
foodArray.forEach(function(value){
  console.log(value);
});
