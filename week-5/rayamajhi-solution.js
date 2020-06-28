
/*
 	============================================
 	; Title: Discussion Board 5.1 - Advanced Arrays
 	; Professor Cross
 	; Date: 25 June 2020
 	; Author: Anil Rayamajhi
 	; Modified By: Arlix Sorto
 	;
 	; Description: JavaScript program with bugs
 	;===========================================
 	*/

 	var header = require("../sorto-header.js");/*** My header file has a different name */
 	console.log(
 	header.display("Anil", "Rayamajhi", "Discussion Board 5.1 - Advanced Arrays")
 	);

 	console.log("---\n");

 	/*
 	Deliverable:

 	Story point for WEB-101 is 3
 	Story point for WEB-102 is 5
 	Story point for WEB-103 is 1
 	Story point for WEB-104 is 3
 	Story point for WEB-105 is 2
 	*/

 	/**
 	 *
 	 * @param {*} story
 	 * @param {*} point
 	 *
 	 * @returns void
 	 */
 	function logger(story, point) {
 	console.log(`Story point for ${story} is ${point}`);
 	}

 	/**
 	 * backlogs instance of Map
 	 * JavaScript Keyed Collections: Map
 	 */
 	const backlogs = new Map();

 	backlogs.set("WEB-101", "3"); /** The solution is replacing “.add()” with “.set()”  */
 	backlogs.set("WEB-102", "5");
 	backlogs.set("WEB-103", "1");
 	backlogs.set("WEB-104", "3");
 	backlogs.set("WEB-105", "2");

 	//loop through map and output
 	backlogs.forEach((point, story) => logger(story, point)); /** The “logger” is a parameterized function and requires the two arguments when calling the function. */
