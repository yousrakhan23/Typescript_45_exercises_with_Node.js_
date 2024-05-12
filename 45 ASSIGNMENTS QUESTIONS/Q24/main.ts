// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False
// result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater 
//than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// define variables.
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equality and in equality with strings

console.log("Is mango is equal to mango?");
console.log(mango == "mango");

console.log("\nIs mango is not eqaual to mango");
console.log(mango != "mango");

// Tests using the lower case function

console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLocaleLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after converting to lower case?");
console.log(uppercaseMango.toLocaleLowerCase() != "mango");

// Numerical tests

// equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// greater than 
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);

// less than 
console.log("\n Is twenty is less than 10");
console.log(twenty < 10);

// greater than equal to 
console.log("\n Is ten is greater than or equal to 5");
console.log(ten >= 5);

// less than or equal to 
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests using "and" and "or" operators

// using && (and)
console.log("\n twenty is not equal to 10 and twenty");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty");
console.log(twenty != 10 && twenty > 30);

// using || (OR)
console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is in a array

console.log("\n Is orange include in my Fruits array");
console.log(fruits.includes("orange"));

// not include
console.log("\n Is orange not include in my Fruits array?");
console.log(!fruits.includes("orange"));