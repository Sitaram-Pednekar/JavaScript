/*
  Let's learn about variables in JavaScript.

  Variables can be declared using 'var', 'let', or 'const'.
  In older JavaScript, 'var' was commonly used, but now 'let' and 'const' are preferred.

  - 'let' allows you to change the value later.
  - 'const' does not allow reassignment after the value is set.
*/

// Example using a number (integer)
let age = 25;

// Print the value stored in 'age'
console.log(age); // Prints: 25

// If you write console.log("age"), it will print the word "age",
// because anything inside quotes is treated as a string.


// Example using a string
let name = "Twisty";
console.log(name); // Prints: Twisty


// Example using const
const userID = 1234;

// userID = 55; // This will cause an error because const cannot be reassigned
// TypeError: Assignment to constant variable.

console.log(userID);
