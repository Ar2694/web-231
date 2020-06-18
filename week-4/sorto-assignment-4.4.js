/*
  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/
/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Assignment 4.4"));


var states = ["Alabama","Nebraska", "Iowa", "California", "Nevada"];

//Compare two states and return true if matches.
function getState(str1, str2){
  if(str1 === str2){
    return true;
  }


}
/***Output each state with the forEach() method*/
console.log("");
console.log("-- ORIGINAL ARRAY --")
states.forEach(function(state) {
    console.log(state);
});

/***Sort states with the sort() method and then output sorted states*/
console.log("");
console.log("-- SORTED ARRAY --")
states.sort().forEach(function(state) {
    console.log(state);
});

/***Filter states with the filter() method*/
var filteredStates = states.filter(function(state){
    return getState(state,"Iowa")
});

/***Output the filtered states. */
console.log("");
console.log("-- SELECTED VALUE --")
filteredStates.forEach(function(state) {
    console.log(state);
});


