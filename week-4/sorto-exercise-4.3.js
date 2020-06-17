/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/


/* Import sorto-header.js from the root directory*/
const header = require('../sorto-header.js');

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 4.3"));
console.log("");

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

function getValue(arr, str){
  console.log("-- DISPLAYING ARRAY ITEMS --");

  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
  console.log("");
  for(var i = 0; i < arr.length; i++){

    if(arr[i] === str){
      console.log("-- SELECTED VALUE --");
      console.log(arr[i]);
    }
  }
}
function getValue2(arr, str){

  for(var i = 0; i < arr.length; i++){

    if(arr[i] === str){
      console.log("-- SELECTED VALUE --");
      console.log(arr[i]);
    }
  }
}
getValue(vehicles, "Motorcycle");
console.log(" ");
getValue2(vehicles, "Bus");
