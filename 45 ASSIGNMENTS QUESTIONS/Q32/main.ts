
//Checking Usernames: Do the following to create a program that simulates how websites ensure 
//that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new
// usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, 
//print a message that the person will need to enter a new username. If a username has not been used, 
//print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// array of current users
let current_users = ["munazzah" , "abeera" , "haider" , "ammar" , "hasnain"]

// arrau of new users
let new_users = ["saad" , "Abeera" , "hassan" , "yousra"]

// loop through new_users to check for user avaibility
new_users.forEach(new_one_users => {

    // making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_users => current_users.toLocaleLowerCase() === new_one_users.toLocaleLowerCase())

    // print different messages using if else statement
    if(our_condition){
       console.log(`Sorry ${new_one_users} is already taken!`)
    }else{
        console.log(`This user name ${new_one_users} is available`)
    }
})