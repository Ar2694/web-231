/*
  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/


/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Assignment 5.4"));
console.log("");


var composersArray = [
  { firstName: "Ludwig", lastName: "Beethoven", genre: "Classical", rating: 8 },
  { firstName: "Wolfgang", lastName: "Mozart", genre: "Classical", rating: 10 },
  { firstName: "Johann", lastName: "Bach", genre: "Classical", rating: 9 },
  { firstName: "Joseph", lastName: "Haydn", genre: "Classical", rating: 6 },
  { firstName: "Franz", lastName: "Schubert", genre: "Classical", rating: 5 },
];

// Filter by rating and composer from the original object array.
var filterByRatings = composersArray.map((value) =>{
    return {rating: value.rating, composer: value.lastName};
});
// Filter by genre and composer from the original object array.
var filterByGenres = composersArray.map((value) =>{
  return {genre: value.genre, composer: value.lastName};
});

//iterate over each array and output result.
console.log("-- COMPOSER BY RATING --");
filterByRatings.forEach((value) =>{
  console.log("Rating: " + value.rating + "\n" +"Composer: " + value.composer+ "\n");
});

//iterate over each array and output result.
console.log("");
console.log("-- COMPOSER BY GENRE --");
filterByGenres.forEach((value) =>{
  console.log("Genre: " + value.genre + "\n" +"Composer: " + value.composer+ "\n");
});
