/*
  Expected output:

  Arlix Sorto
  Exercise 4.2 - Arrays
  6/16/2020

  Apple
  Orange
  Banana
  Mango
  Pear
*/

var fruitItems = ["Apple", "Orange", "Banana", "Mango", "Pear"];

function getFruit(fruits) {
  for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

getFruit(fruitItems);
