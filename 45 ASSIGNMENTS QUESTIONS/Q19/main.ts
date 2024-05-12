
// Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a 
//message indicating the number of people you are inviting to dinner.

let guestlist = ["Muhammad","Ayezah","Umar","Ayesha","Romaan"];

guestlist.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to dinner with me?`)); 

let lengthGuest: number = guestlist.length;

console.log(`We are Inviting total ${lengthGuest} guests.`);