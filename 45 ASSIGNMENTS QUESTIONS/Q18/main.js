"use strict";
// Q18: Seeing the world: think of at least five places you would 
//like to visit.
// making an array of countries and print its original order
let countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order", countriesToVisit);
// copy of an original array without modifying the actual array list
//* function of sort is :ordered in alphabetical 
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// show that the array is still in its original order.
console.log("still in original order:", countriesToVisit);
// print the array in reverse order without modifying the actual array list.
console.log("Reverse order:", [...countriesToVisit].reverse());
// show that the array is still in its original order.
console.log("still in original order:", countriesToVisit);
// we have change the original array order
console.log("original array reversed:", countriesToVisit.reverse());
// print the array to show that its back to list original order
console.log("Back to original order:", countriesToVisit.reverse());
// print the aaray to sahow that its order has been changed in alphababatical order now
console.log("Sorted in Alphabatical order:", countriesToVisit.sort());
// we have changed again the original array order now in reverse order again
console.log("original array reversed again:", countriesToVisit.reverse());
