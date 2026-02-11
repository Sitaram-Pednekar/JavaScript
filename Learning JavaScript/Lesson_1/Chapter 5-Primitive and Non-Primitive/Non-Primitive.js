// NON-PRIMITIVE (REFERENCE) DATA TYPES IN JAVASCRIPT
// These values are stored by reference (memory address) and are mutable.


// 1) Object
let obj1 = { name: "Alice", age: 22 }; // create object
let obj2 = obj1;                       // copy reference (not a new object)

obj2.age = 30;                         // modify through obj2
console.log(obj1.age);                 // 30 (same reference)


// 2) Array
let arr1 = [1, 2, 3];  // create array
let arr2 = arr1;       // copy reference

arr2.push(4);          // modify through arr2
console.log(arr1);     // [1, 2, 3, 4]


// 3) Function
function greet() {
  return "Hello";
}

let f1 = greet;        // reference to the same function
console.log(f1());     // "Hello"


// 4) Date (object type)
let d1 = new Date();   
let d2 = d1;           

d2.setFullYear(2000);  
console.log(d1.getFullYear()); // 2000


// 5) RegExp (object type)
let r1 = /abc/;        
let r2 = r1;           

console.log(r2.test("abcdef")); // true


// =======================
// Comparison by Reference
// =======================

let a = { x: 1 };
let b = { x: 1 };

console.log(a === b);  // false (different objects in memory)

let c = a;
console.log(a === c);  // true (same reference)


// =======================
// Proper Way to Copy (Important)
// =======================

// Object copy (shallow copy)
let originalObj = { name: "Bob" };
let copyObj = { ...originalObj };

copyObj.name = "Tom";
console.log(originalObj.name); // "Bob" (now separate)


// Array copy (shallow copy)
let originalArr = [1, 2, 3];
let copyArr = [...originalArr];

copyArr.push(4);
console.log(originalArr); // [1, 2, 3]
