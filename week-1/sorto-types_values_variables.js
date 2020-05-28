/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 27 May 2020
; Modified By: Arlix Sorto
; Description: This program outputs 3 employee records.
;===========================================
*/ 

/* Variable declarations */
var firstName1;
var lastName1;
var address1;
var payRate1;
var hireDate1;

var firstName2;
var lastName2;
var address2;
var payRate2;
var hireDate2;

var firstName3;
var lastName3;
var address3;
var payRate3;
var hireDate3;

/* Employee 1 */
firstName1 = "George";
lastName1 = "Washington";
address1 = "123 Jane st";
payRate1 = 11;
hireDate1 = new Date(2012,3,3);

console.log(firstName1);
console.log(lastName1);
console.log(address1);
console.log(payRate1.toFixed(1));
console.log(hireDate1.toLocaleDateString());


/* Employee 2 */
firstName2 = "John";
lastName2 = "Doe";
address2 = "123 Nebraska st";
payRate2 = 12;
hireDate2 = new Date(2014,6,27);

console.log("");
console.log(firstName2);
console.log(lastName2);
console.log(address2);
console.log(payRate2.toFixed(1));
console.log(hireDate2.toLocaleDateString());


/* Employee 3 */
firstName3 = "Jerry";
lastName3 = "Who";
address3 = "123 5th st";
payRate3 = 15;
hireDate3 = new Date(2019,9,14);

console.log("");
console.log(firstName3);
console.log(lastName3);
console.log(address3);
console.log(payRate3.toFixed(1));
console.log(hireDate3.toLocaleDateString());
