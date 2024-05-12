// Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by
// adding the phrase the Great to each magician’s name. Call sho
// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magicians_names = ["Harry Porter", "Yousra", "Hassan"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
