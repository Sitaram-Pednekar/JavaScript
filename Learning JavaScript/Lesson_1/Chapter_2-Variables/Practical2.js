/*
  Deep Knowledge About Variables and Data Types in JavaScript

  JavaScript automatically assigns data types to variables.
  If you need strict type control, you can use TypeScript.

  Below are the basic data types in JavaScript.
*/


// Number (used for both integers and decimals)
let age = 25;
// JavaScript does not have a separate integer type.
// All numbers are stored as floating-point values.


// String (used for text)
let name = "Twisty";
// Strings can be written using '', "", or backticks ``.


// Boolean (true or false)
let isStudent = true;
// Commonly used in conditions and loops.


// Undefined (declared but not assigned)
let x;
console.log(x); // Output: undefined


// Null (intentional empty value)
let y = null;
console.log(y); // Output: null


// BigInt (very large whole numbers)
let bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue);


// Symbol (unique identifiers)
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (each symbol is unique)


// Complex data types (covered later)
// Object, Array, Function, etc.



/*
  To check the data type of a variable,
  we use the 'typeof' operator.
*/

console.log(typeof y);          // "object" (this is a known JavaScript quirk for null)
console.log(typeof isStudent);  // "boolean"

// You can also store the result in a variable
let whatType = typeof y;
console.log(whatType); // "object"
