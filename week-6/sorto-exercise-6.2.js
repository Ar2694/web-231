/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

/* Import sorto-header.js from the root directory*/
const header = require("../sorto-header.js");

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 6.2"));
console.log("");

try {
  var num = "5";
  var num2 = number(num);// This should throw an error.

  console.log(num2);
} catch (error) {
  console.log("Catch clause: " + error);
} finally {
  console.log("Finally clause reached...");
}
