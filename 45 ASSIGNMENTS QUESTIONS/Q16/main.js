"use strict";
// Q16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestlist = ["Muhammad", "Ayezah", "Umar", "Ayesha", "Romaan"];
let dontcome = guestlist[0];
console.log(dontcome, "I can't come");
guestlist.splice(0, 1, "Ali");
guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
//  Creating a Guest List Array
let guestList = ["Muhammad", "Ayezah", "Umar", "Ayesha", "Romaan"];
// Making Variable for those Guest who can't come
let dontCome = guestList[0];
// Print the name of Guest who can't come
console.log(dontCome, "I can't come");
// Add or remove values from Guest list Array
guestList.splice(0, 1, "Ali");
// Message print for bigger table
console.log("Good News ! We have found a Bigger Table for Dinner ");
// Adding a new guest at starting index of array 
guestList.unshift("Saad");
// Adding a new guest at ending index of array
guestList.push("Ammar");
// Get a middle index of  our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Hoor");
// Print mesaage of Updated list 
console.log("Updated list of our guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
