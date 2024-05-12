
// Q17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can
// only invite two guests.


// Creating a Guest List Array
let guestList = ["Muhammad","Ayezah","Umar","Ayesha","Romaan"];

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
let middleIndex:number =Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array 
guestList.splice(middleIndex,0, "Hoor");

// Print mesaage of Updated list 
console.log("Updated list of our guests");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// inform that only two guests can be invited for dinner.
console.log("Unfortunately, the new dinner table want arrive on time, I can only invite two guests t a dinner with me");

// using while loop to remove guest from the array until only two namesremain

while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}

// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// // removing last two guest from the list.

guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);
