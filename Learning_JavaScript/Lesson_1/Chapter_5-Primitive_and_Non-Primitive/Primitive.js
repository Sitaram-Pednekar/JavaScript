/*
  PRIMITIVE DATA TYPES

  Primitive values are stored in stack memory.
  They can hold only a single value and are copied by value.

  Types:
  Number, String, BigInt, Undefined, Null, Symbol, Boolean
*/


// Symbol (always unique)
let customerID1 = Symbol(245);
let customerID2 = Symbol(345);


// String
let customerName = "Twisty";


// BigInt (must use 'n' at the end)
let referenceNumber = 123129390182730172381732703434324234234324324234324234322384032n;


// Undefined (declared but not assigned)
let hobby;


// Boolean
let attendance = false;


// Null (intentional empty value)
let salary = null;


// Checking data types
console.log(typeof customerID1);     // "symbol"
console.log(typeof customerID2);     // "symbol"
console.log(typeof customerName);    // "string"
console.log(typeof referenceNumber); // "bigint"
console.log(typeof hobby);           // "undefined"
console.log(typeof attendance);      // "boolean"
console.log(typeof salary);          // "object" (JavaScript quirk for null)
