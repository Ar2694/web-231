
/*
 	============================================
 	; Title: Discussion Board 4.1 - Arrays
 	; Author: Anil Rayamajhi
 	; Date: 17 June 2020
 	; Modified by: Arlix Sorto
 	; Description: JavaScript program with three errors
 	;===========================================
 	*/

 	console.log("");

 	/*
 	Deliverable:
 	[2, 4, 6, 8]
 	*/

 	// Declare array
 	// Set size to numArray
 	// HINT: https://github.com/buwebdev/web-231/blob/master/week-4/arrays-and-operators.js
 	const numArray = new Array(10),
 	payload = [];

 	/**
 	 * Description: loop to accumulate even number in payload array
 	 * HINT: '%' operator
 	 */
 	for (let index = 1; index < numArray.length; index++) {
 	if (index % 2 === 0) {
 	// push index to payload
 	payload.push(index);
 	}
 	}

 	//output
 	console.log(payload);

   /*** Solution for the errors.
    * Line 22: when creating an array that has an incorrect constructor form. The solution is changing the constructor form to “new Array(10)”.
    *
    * Line 30: Has an incorrect arithmetic operator to find the remainder of a division. The solution is replacing the division (/) operator with the modulo (%) operator.
    *
    *Line 32: Is not using a valid method to add new elements to an array. The solution is replacing the “add()” with “push()”.
    */
