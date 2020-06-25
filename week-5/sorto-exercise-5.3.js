/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 5.3"));
console.log("");


var composersArray = [
  { firstName: "Ludwig", lastName: "Beethoven", genre: "Classical", rating: 8 },
  { firstName: "Wolfgang", lastName: "Mozart", genre: "Classical", rating: 10 },
  { firstName: "Johann", lastName: "Bach", genre: "Classical", rating: 9 },
  { firstName: "Joseph", lastName: "Haydn", genre: "Classical", rating: 6 },
  { firstName: "Franz", lastName: "Schubert", genre: "Classical", rating: 5 },
];

console.log("-- COMPOSERS --");
composersArray.forEach(function(value){
  console.log("Last Name: " + value.lastName + ", Genre: " + value.genre + ", Rating: " + value.rating);
});
