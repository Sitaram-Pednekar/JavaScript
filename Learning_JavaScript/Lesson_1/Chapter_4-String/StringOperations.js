// =======================
// STRING OPERATIONS
// =======================

/*
  A string represents text in JavaScript.
  We can perform many operations on strings using operators and built-in methods.
*/

let A = "abc";
let B = "cdf";

// Adding two strings joins them together (concatenation)
console.log(A + B); // "abccdf"


// Creating full name using two strings
let name = "Twisty";
let surname = "Sneeze";

// Add a space between name and surname
let fullname = name + " " + surname;
console.log(fullname); // "Twisty Sneeze"


// =======================
// STRING LENGTH
// =======================

console.log(fullname.length);

let fullNameLength = fullname.length;
console.log(fullNameLength);


// =======================
// ACCESSING CHARACTERS (Index)
// =======================

/*
  Index always starts from 0

  Example: "Hello"
           01234
*/

console.log(name[0]); // "T"


// =======================
// STRING METHODS
// =======================

/*
  slice(start, end)      → Extract part of string
  substring(start, end)  → Similar to slice
  substr(start, length)  → Legacy (not recommended now)
*/

console.log(name.slice(0, 3));        // "Twi"
console.log(name.substring(0, 3));   // "Twi"
console.log(surname.substr(2, 3));   // "eez"


// =======================
// UPPERCASE & LOWERCASE
// =======================

// Important: these are methods, so use ()
console.log(fullname.toUpperCase()); // "TWISTY SNEEZE"
console.log(fullname.toLowerCase()); // "twisty sneeze"
