// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a 
//separate array. Call show_magicians() with each array to show that you have one array of
// the original names and one array with the Great added to each magician’s name.
// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magicians_names = ["Harry Porter", "Yousra", "Hassan"];
// making a copy of original array through .slice() function
var copy_magicians_names = magicians_names.slice();
// modify the copied array to include "the great" with their names
var copy_great_names = make_great(copy_magicians_names);
// show both arrays original and copied
// original
console.log("Orginal array\n");
show_magicians(magicians_names);
// copied
console.log("\nCopied array\n");
show_magicians(copy_great_names);
