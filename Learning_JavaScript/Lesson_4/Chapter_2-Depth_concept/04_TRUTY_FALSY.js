/* ============================================================
   TRUTHY & FALSY VALUES IN JAVASCRIPT — IN DEPTH
   ============================================================

   In JavaScript, every value is treated as either:
   TRUE (truthy) or FALSE (falsy) when used in conditions.

   Example:
   if (value) {
     // runs if value is truthy
   }
*/



/* ------------------------------------------------------------
   FALSY VALUES (ONLY 8 VALUES ARE FALSY IN JS)
   These always behave like FALSE in conditions
------------------------------------------------------------ */

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false



/* ------------------------------------------------------------
   EVERYTHING ELSE IN JAVASCRIPT IS TRUTHY
------------------------------------------------------------ */

console.log(Boolean(true));        // true
console.log(Boolean(1));           // true
console.log(Boolean(-5));          // true
console.log(Boolean("hello"));     // true
console.log(Boolean("0"));         // true (string, not number)
console.log(Boolean("false"));     // true (string)
console.log(Boolean([]));          // true (empty array)
console.log(Boolean({}));          // true (empty object)
console.log(Boolean(function(){}));// true



/* ------------------------------------------------------------
   HOW JS DECIDES TRUTHY / FALSY IN IF
------------------------------------------------------------ */

let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");   // execution
}



/* ------------------------------------------------------------
   VERY COMMON CONFUSION
------------------------------------------------------------ */

// Empty array is truthy
if ([]) {
  console.log("Array is truthy");  // execution
}

// Empty object is truthy
if ({}) {
  console.log("Object is truthy"); // execution
}

// String "0" is truthy
if ("0") {
  console.log('"0" is truthy'); // execution
}



/* ------------------------------------------------------------
   PRACTICAL USE — CHECKING VALUES
------------------------------------------------------------ */

let username = "";

if (!username) {
  console.log("Username is required"); // execution
}



/* ------------------------------------------------------------
   SHORT-CIRCUIT USING TRUTHY/FALSY
------------------------------------------------------------ */

let name = "Twisty";

name && console.log("Name exists"); // execution

let data = null;

data || console.log("Provide data"); // execution



/* ------------------------------------------------------------
   DOUBLE NOT (!!) TO CONVERT INTO BOOLEAN
------------------------------------------------------------ */

let x = "hello";

console.log(!!x); // true
