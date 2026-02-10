// NON-PRIMITIVE (REFERENCE) DATA TYPES IN JAVASCRIPT
// These store data by reference (address) and are mutable.

// 1) Object
let obj1 = { name: "Alice", age: 22 }; // create object
let obj2 = obj1;                       // copy reference
obj2.age = 30;                        // modify through obj2
console.log(obj1.age);                // 30 (same reference)

// 2) Array
let arr1 = [1, 2, 3];  // create array
let arr2 = arr1;       // copy reference
arr2.push(4);          // modify through arr2
console.log(arr1);     // [1, 2, 3, 4]

// 3) Function
function greet() {
  return "Hello";
}
let f1 = greet;        // reference to function
console.log(f1());     // "Hello"

// 4) Date
let d1 = new Date();   // current date object
let d2 = d1;           // copy reference
d2.setFullYear(2000);  // change year
console.log(d1.getFullYear()); // 2000

// 5) RegExp
let r1 = /abc/;        // regular expression
let r2 = r1;           // copy reference
console.log(r2.test("abcdef")); // true

// Comparison by reference
let a = { x: 1 };
let b = { x: 1 };
console.log(a === b);  // false (different references)

let c = a;
console.log(a === c);  // true (same reference)
