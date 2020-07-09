/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

/* Import sorto-header.js from the root directory*/
const header = require("../sorto-header.js");

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 7.2"));
console.log("");


//Employee constructor
function Employee(id,first_name, last_name, title){
  this.id = id;
  this.first_name = first_name;
  this.last_name = last_name;
  this.title = title;
}

//Array of employee objects
var employees = [
  new Employee(1, "Thomas","Edison", "Software Engineer"),
  new Employee(2, "Benjamin","Franklin", "Programmer"),
  new Employee(3, "Nikola","Tesla", "Project Manager"),
  new Employee(4, "Charles","Babbage", "Product Manager"),
  new Employee(5, "Alexander","Bell", "Business Analyst"),
]

//Output result
employees.forEach(function(value) {
  console.log(value.id + " " + value.first_name + " " +value.last_name + " " + value.title);
});
