
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call 
//provides, and it should print a summary of the sandwich that is being ordered. Call the
// function three times, using a different number of arguments each time.


// define a function with a rest parameters that accecpt items arguments reresenting our sandwich

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\n Now Enjoy Sandwich");
}

// call the function 3 times with 3 different number of arguements
makeSandwich("chicken", "cheese", "mayo", "ketchup");

makeSandwich("Bread", "Butter");

makeSandwich("Bread" , "Butter", "mayo", "egg", "cheese", "chicken", );