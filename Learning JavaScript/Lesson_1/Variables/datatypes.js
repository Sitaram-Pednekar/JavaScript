//here are multiple datatypes in Javascript but its automatically assigned if you need to use those for strict action need to use TypeScript
//see this are the following datatypes
//int : Integers are used to represent whole numbers without decimal points. They can be positive, negative, or zero. In JavaScript, there is no specific integer type; instead, all numbers are represented as floating-point values. However, you can use integers in JavaScript by simply assigning whole numbers to variables.
//example
let age = 25;

//string : Strings are used to represent text. They are enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Strings can contain letters, numbers, symbols, and spaces.
//example
let name = "Twisty" 

//boolean : Booleans are used to represent logical values. They can only have two possible values: true or false. Booleans are often used in conditional statements and loops to control the flow of a program.
//example
let isStudent = true;

//undefined : The undefined data type represents a variable that has been declared but has not been assigned a value. It is the default value of uninitialized variables.
let x;
console.log(x); // Output: undefined   

//null : The null data type represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object reference is empty.
let y = null;
console.log(y); // Output: null

//bigint : BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number that can be safely represented with the Number type. BigInt values are created by appending "n" to the end of an integer literal or by using the BigInt() constructor.
let bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue); // Output: 123456789012345678901234567890n

//symbol : Symbols are a unique and immutable data type introduced in ECMAScript 2015 (ES6). They are often used as unique identifiers for object properties. Each symbol is guaranteed to be unique, even if they have the same description.
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // Output: false

//this is the basic datatypes in JavaScript but there are also some complex datatypes like Object, Array, Function etc. which we will learn in upcoming lessons.