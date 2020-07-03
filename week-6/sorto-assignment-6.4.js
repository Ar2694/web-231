/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

/* Import sorto-header.js from the root directory*/
const header = require("../sorto-header.js");

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Assignment 6.4"));
console.log("");

//Nested object literal
var ticket = {
  id: 105,
  name: "Bob Jones",
  dateCreated: new Date().toLocaleDateString("en-US"),
  priority: "High",
  person: {
    id: 1,
    firstName: "Bob",
    LastName: "Jones",
    jobTitle: "Programmer",
  },
};

//Display the results.
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated +" and assigned to employee "+ ticket.name+" ("+ ticket.person.jobTitle +" I).");
