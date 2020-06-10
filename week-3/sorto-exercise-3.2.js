/*
  Expected output:

  Arlix Sorto
  Exercise 3.2
  6/9/20

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/


// Test variables
var val1 = "Truck";
var val2 = "Car";
var val3 = "Bike";
var val4 = "Bike";
var val5 = "Four";
var val6 = "Three";

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
    return value1 + " and " + value2 + " do not match!";
  }
}

//Function: Return's a string if values do match.
function logMatch(value1, value2){
  if(value1 === value2){
    return value1 + " and " + value2 + " do match!";
  }
}

// Compares the first set of values.
if(match(val1,val2)){

  console.log(logMatch(val1, val2));

}else{

  console.log(logMismatch(val1, val2));

}

// Compares the second set of values.
if(match(val3,val4)){

  console.log(logMatch(val3,val4));

}else{

  console.log(logMismatch(val3,val4));

}

// Compares the third set of values.
if(match(val5,val6)){

  console.log(logMatch(val5,val6));

}else{

  console.log(logMismatch(val5,val6));

}

