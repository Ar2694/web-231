/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/


/* Import sorto-header.js from the root directory*/
const header = require("../sorto-header.js");

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 6.3"));
console.log("");

var tickets ={
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones"
}

console.log("{id: " + tickets.id + ", name: " + tickets.name+", requester: "+ tickets.requestor+"}");
