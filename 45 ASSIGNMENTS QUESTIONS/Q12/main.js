"use strict";
// Q12: Greetings: Use the array from Exercise 11. Instead of just
// printing each person’s name, print a message to them. The message 
//should be the same for each person, but personalized with their name.
let friendsName = ["Hassan", "Hasnain", "Haider", "Ammar", "Abeera"];
for (let name of friendsName) {
    console.log(`Hello ${friendsName}, would you like to work with me`);
}
