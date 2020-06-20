/*
 	============================================
 	; Title: Discussion 4.1
 	; Author: Perry Fulfs
 	; Date: 16 June 2020
 	; Modified By: Arlix Sorto
 	; Description: create an array
 	; that outputs random motorcycle brand name
 	;===========================================
 	*/

 	// output: random motorcyle brand
 	// FIXME:

 	function random_item(items)
 	{

 	return items[Math.floor(Math.random()*items.length)];

 	}

 	var items = ["YAMAHA", "HONDA", "TRIUMPH", "HARLEY DAVIDSON", "DUCATI"];
 	console.log(random_item(items));
