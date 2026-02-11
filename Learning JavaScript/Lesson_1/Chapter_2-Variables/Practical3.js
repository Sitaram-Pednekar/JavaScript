// TYPE CONVERSION IN JAVASCRIPT

/*
  JavaScript automatically assigns data types to variables.
  Sometimes, we need to manually convert one data type into another.
  This process is called type conversion.
*/


// A string that contains a number
let Y = "33";
console.log(Y);           // Output: "33"
console.log(typeof Y);    // "string"


// Convert the string into a number
let X = Number(Y);
console.log(X);           // Output: 33
console.log(typeof X);    // "number"


/*
  Important case:
  What happens if the string contains both numbers and letters?
*/

let A = "33abc";
console.log(A);           // "33abc"
console.log(typeof A);    // "string"

// Try converting to number
let B = Number(A);
console.log(B);           // NaN
console.log(typeof B);    // "number"

/*
  NaN means "Not a Number".
  It appears when JavaScript fails to convert a value into a valid number.
*/


/*
  Summary:
  "33"    -> valid for Number conversion
  "33abc" -> invalid -> results in NaN
*/


// Boolean conversion examples

let K = 1;
let M = Boolean(K);
console.log(M);           // true

/*
  Rules for Boolean conversion:
  0, null, undefined, "", and NaN  -> false
  Any other value                  -> true
*/

let value = "abc";
let result = Boolean(value);
console.log(result);      // true (because the string is not empty)
