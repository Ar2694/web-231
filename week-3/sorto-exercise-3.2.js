/*
============================================
; Title:  sorto-excercise-3.2.js
; Author: Arlix Sorto
; Date:   6/9/2020
; Modified by: Arlix Sorto
; Description: Exercise 3.2 - Pattern Matching Functions
;===========================================
*/


var fruit1 = "apples";
var fruit2 = "pineapples";
var fruit3 = "oranges";
var fruit4 = "oranges";
var fruit5 = "mangos";
var fruit6 = "grapes";


// Compares the first set of values.
if(match(fruit1,fruit2)){

  console.log(logMatch(fruit1, fruit2));

}else{

  console.log(logMismatch(fruit1, fruit2));

}

// Compares the second set of values.
if(match(fruit3,fruit4)){

  console.log(logMatch(fruit3,fruit4));

}else{

  console.log(logMismatch(fruit3,fruit4));

}

// Compares the third set of values.
if(match(fruit5,fruit6)){

  console.log(logMatch(fruit5,fruit6));

}else{

  console.log(logMismatch(fruit5,fruit6));

}


//Function: Compares two values and return's a boolean.
function match(value1, value2){
    if(value1 === value2){

      return true;
    }else{

      return false;
    }
}

//Function: Return's a string if values do not match.
function logMismatch(value1, value2){
  if(value1 !== value2){
    return "Your values do not match.";
  }
}

//Function: Return's a string if values do match.
function logMatch(value1, value2){
  if(value1 === value2){
    return "Your values do match.";
  }
}

