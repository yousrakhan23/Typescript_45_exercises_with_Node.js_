"use strict";
// Q15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new
// set of invitations with a replacement guest.
let guestlist = ["ammar", "uzma", "saad"];
let dontcome = guestlist[1];
console.log(dontcome, "she dont come");
guestlist.splice(1, 2, "ali");
guestlist.forEach(guest => console.log(`salam ${guest}, would u like to dinner with me`));
