
/*=======================================
; Title: Discussion Board 3.1
; Author: Professor Krasso
; Date: 9 June 2020
; Modify by: Arlix Sorto
; Description: Javascript program using
; for statement. Three errors present.
=======================================*/


// Using 'for' statement
// two errors in the following statement
let number = '';

for (let i = 0; i < 11; i++){
number += i + "\n";
}

// Output is numbers 0 - 10. Each in a new line.
// One error present in the following statement.
console.log(number);

/**
 * ::: My solution
 *
 * Line 16: For loop has a syntax error that is missing the left curly braces.
 *          The code statement for a for-loop needs to be enclosed between two curly braces {}.
 *
 * Line 16: The for-loop increment expression is incorrect which is missing the second plus(+) sign.
 *          Adding another plus sign to the post-increment operator should fix the issue.
 *
 * Line 22: Is using the wrong variable name since JavaScript is a case-sensitive language.
 * 			The solution is to make all letter lowercase to use the correct variable name.
 */
