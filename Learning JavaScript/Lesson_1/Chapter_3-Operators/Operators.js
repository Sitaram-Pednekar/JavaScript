// =======================
// 1) ARITHMETIC OPERATORS
// =======================

let a = 10;
let b = 3;

console.log(a + b);   // Addition → 13
console.log(a - b);   // Subtraction → 7
console.log(a * b);   // Multiplication → 30
console.log(a / b);   // Division → 3.333...
console.log(a % b);   // Modulus (remainder) → 1
console.log(a ** b);  // Exponentiation → 1000

let x = 5;
console.log(x++); // Post-increment → prints 5, then x becomes 6
console.log(++x); // Pre-increment → x becomes 7, prints 7


// =======================
// 2) ASSIGNMENT OPERATORS
// =======================

let y = 10;

y += 5;  // y = y + 5
y -= 3;  // y = y - 3
y *= 2;  // y = y * 2
y /= 4;  // y = y / 4
y %= 3;  // y = y % 3
y **= 2; // y = y ** 2

console.log(y);


// =======================
// 3) COMPARISON OPERATORS
// =======================

console.log(5 == "5");    // true  (loose equality, type ignored)
console.log(5 === "5");   // false (strict equality, type checked)

console.log(10 != "10");  // false
console.log(10 !== "10"); // true

console.log(5 > 2);   // true
console.log(5 < 2);   // false
console.log(5 >= 5);  // true
console.log(5 <= 3);  // false


// =======================
// 4) LOGICAL OPERATORS
// =======================

console.log(true && false); // AND → false
console.log(true || false); // OR → true
console.log(!true);         // NOT → false

// Short-circuit behavior
console.log(0 || "Hello"); // "Hello" (first truthy value)
console.log("Hi" && 5);    // 5 (last truthy value)


// =======================
// 5) STRING CONCATENATION
// =======================

console.log("Hello " + "World"); // "Hello World"
console.log("5" + 2);            // "52" (number becomes string)


// =======================
// 6) TYPE OPERATORS
// =======================

console.log(typeof 123);    // "number"
console.log(typeof "text"); // "string"
console.log(typeof true);   // "boolean"

let arr = [];
console.log(arr instanceof Array); // true


// =======================
// 7) TERNARY OPERATOR
// =======================

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);


// =======================
// 8) NULLISH COALESCING (??)
// =======================

console.log(null ?? "Default");      // "Default"
console.log(undefined ?? "Default"); // "Default"
console.log(0 ?? "Default");        // 0 (not null/undefined)


// =======================
// 9) OPTIONAL CHAINING (?.)
// =======================

let user = {};
console.log(user?.address?.city); // undefined (no error)


// =======================
// 10) BITWISE OPERATORS
// =======================

console.log(5 & 1);  // AND
console.log(5 | 1);  // OR
console.log(5 ^ 1);  // XOR
console.log(~5);     // NOT
console.log(5 << 1); // Left shift
console.log(5 >> 1); // Right shift


// =======================
// 11) SPREAD OPERATOR (...)
// =======================

let nums = [1, 2];
let newNums = [...nums, 3];
console.log(newNums); // [1, 2, 3]


// =======================
// 12) DESTRUCTURING
// =======================

let [m, n] = [10, 20];
console.log(m, n);


// =======================
// 13) COMMA OPERATOR
// =======================

let z = (1, 2, 3);
console.log(z); // 3 (last value returned)


// =======================
// 14) OPERATOR PRECEDENCE
// =======================

console.log(5 + 2 * 3);   // 11 (* runs first)
console.log((5 + 2) * 3); // 21 (parentheses first)


// =======================
// Common Mistake: Mixing Numbers and Strings
// =======================

console.log(5 + 4 + "1"); 
// "91" → (5 + 4) = 9, then "9" + "1"

console.log("1" + 5 + 4); 
// "154" → "1" + 5 = "15", then "15" + 4

// Use parentheses to avoid confusion
console.log("1" + (5 + 4)); // "19"
