

// Q6: Striping Names: store a person's name, and include some white space characters at the beginning 
// and end of name. use "\t"(tab) and "\n"(new line) at least once. print the name once, so the 
//whitespace around the name is displayed.then print the name after stripping the whitespaces.

let whitespaceName = "\n\t YOUSRA KHAN \t\n"; // This save the name with whitespace
 console.log(whitespaceName);

let withoutwhitespaceName = whitespaceName.trim(); // This shows the name withoutspace
  console.log(withoutwhitespaceName);