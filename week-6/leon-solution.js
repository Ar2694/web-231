/* ===========================================
 	; Title: Assignment 6. Objects
 	; Author: Professor Krasso
 	; Date: 24 July 2020
 	; Modified By: Wendy Leon
 	; Description: Objects
 	;=========================================== */

 	/*
 	create a simple JavaScript program using
 	object properties with at least (2) errors
 	*/

 	/*
 	 Expected output:
 	 day1: Monday
 	 day2: Tuesday
 	 day3: Wednesday
 	 day4: Thursday
 	 day5: Friday
 	 day: Saturday
 	 day: Sunday
 	*/

 	// Add Header

 	var header = require('../sorto-header.js'); // My file name is different.
 	console.log(header.display("Wendy", "Leon", "Exercise 6.1 - Objects"));
 	console.log('\n');

 	function printThis () {//My solution: Replacing function name “prinThis” with “printThis" should fix it.

 	return ('Sunday');

 	}

 	var daysOfWeek = {
 	day1: 'Monday',
 	day2: 'Tuesday',
 	day3: 'Wednesday',
 	day4: 'Thursday',
 	day5: 'Friday',
 	day6: 'Saturday',
 	day7: printThis()
 	}

for( key in daysOfWeek) {console.log ( key + ": " +daysOfWeek [ key ]) }; // My solution:  The correct way to loop over an object is by using the for/in loop
