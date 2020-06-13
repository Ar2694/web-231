/*
============================================
; Title: Discussion Board 3.1
; Author: Dan Ross
; Date: 11 June 2020;
; Modified by: Arlix Sorto
; Description: Control Statement with
; at least two errors
;===========================================
*/

//The JavaScript below contains 2 errors

//Array of some classic horror movies
var movies = ["Evil Dead", "Dawn of the Dead", "Night of the Living Dead", "Day of the Dead", "Army of Darkness"];
//loop though the array
for (var i = 0; i < movies.length; i++) {
  //output
  console.log(movies[i]);
}

/***
 * Solution for the errors
 * Line 17: The variable "movie" is misspelled and the variable name should be "movies".
 * Line 17: The variable "i" with the post-increment operator is missing a plus(+) sign.
 *          The pre or post-increment operators use two plus signs to work and the "i+" variable should be "i++".
 */
