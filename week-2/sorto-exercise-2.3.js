/*
============================================
; Title:  sorto-excercise-2.3.js
; Author: Arlix Sorto
; Date:   6/3/2020
; Description: Exercise 2.3 - Function Properties
;===========================================
*/

/*  myName function*/
function myName(){
  return myName.arlix;
};
/* create a function properties*/
myName.arlix = "Arlix";

/* console.log output*/
console.log(myName());
