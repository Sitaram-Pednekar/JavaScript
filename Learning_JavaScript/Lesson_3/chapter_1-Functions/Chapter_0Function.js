/* ===================== FUNCTIONS IN JAVASCRIPT ===================== */

// A function is a reusable block of code.
// Write once → use many times by calling it.

// -------------------- Basic Syntax --------------------
/*
function functionName(param1, param2) {
    // body
}
*/

// -------------------- Simple Function --------------------

function msg() {
    console.log("Hello world");
}

msg(); // Output: Hello world



// ================================================================
// Function with parameters and return value
// ================================================================

function addition(A, B) {
    return A + B;  // returns the result to the caller
}

// Wrong usage (no arguments passed)
console.log(addition()); 
// Output: NaN (undefined + undefined = NaN)

// Different data types
console.log(addition(5, "a")); 
// Output: "5a" (number + string = string concatenation)

console.log(addition(5, 5)); 
// Output: 10



// ================================================================
// Handling errors / validating inputs
// ================================================================

function err(A, B) {
    // Check if values are NOT provided
    if (A === undefined || B === undefined) {
        console.log("Give proper values");
        return;  // exit function
    }

    console.log("Thanks for sharing values");
}

err();        // Output: Give proper values
err(5, 4);    // Output: Thanks for sharing values



// ================================================================
// Function with default values
// ================================================================

function sum(a = 0, b = 0) {
    return a + b;
}

console.log(sum());      // 0
console.log(sum(10, 5)); // 15



// ================================================================
// Function Expression
// ================================================================

let greet = function(name) {
    console.log("Hello " + name);
};

greet("Twisty"); // Output: Hello Twisty



// ================================================================
// Arrow Function (Modern way)
// ================================================================

let multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // Output: 20



// ================================================================
// Function calling another function
// ================================================================

function square(n) {
    return n * n;
}

function printSquare(num) {
    console.log("Square is:", square(num));
}

printSquare(6); // Output: Square is: 36
