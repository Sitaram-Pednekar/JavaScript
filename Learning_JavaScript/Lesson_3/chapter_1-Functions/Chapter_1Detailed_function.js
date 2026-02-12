
/* Problem:
   A function can RETURN only ONE value.
   But many times we need multiple results from a function.
   Solution:
   Return them using ARRAY or OBJECT.
*/


// ---------------------------------------------------------
// 1) WRONG WAY — trying to return multiple values directly
// ---------------------------------------------------------

function wrong(a, b) {
  return a, b;   // comma operator returns ONLY the last value
}

console.log(wrong(5, 10)); 
// Output: 10 (only last value returned)


// ---------------------------------------------------------
// 2) CORRECT WAY — return multiple values using ARRAY
// ---------------------------------------------------------

function calcArray(a, b) {
  let sum = a + b;
  let diff = a - b;
  let mul = a * b;

  return [sum, diff, mul]; // return as array
}

// Calling the function
let resultArray = calcArray(10, 5);
console.log(resultArray); 
// Output: [15, 5, 50]

// Accessing values
console.log(resultArray[0]); // 15 (sum)
console.log(resultArray[1]); // 5  (difference)
console.log(resultArray[2]); // 50 (multiplication)


// ---------------------------------------------------------
// 3) BEST WAY — return multiple values using OBJECT
// ---------------------------------------------------------

function calcObject(a, b) {
  return {
    sum: a + b,
    diff: a - b,
    mul: a * b
  };
}

// Calling the function
let resultObj = calcObject(10, 5);
console.log(resultObj); 
// Output: { sum: 15, diff: 5, mul: 50 }

// Accessing values by name (clear & easy)
console.log(resultObj.sum);  // 15
console.log(resultObj.diff); // 5
console.log(resultObj.mul);  // 50


// ---------------------------------------------------------
// 4) DESTRUCTURING — clean way to receive multiple values
// ---------------------------------------------------------

// From ARRAY
let [s, d, m] = calcArray(8, 2);
console.log(s, d, m); 
// Output: 10 6 16

// From OBJECT
let { sum, diff, mul } = calcObject(8, 2);
console.log(sum, diff, mul);
// Output: 10 6 16


// ---------------------------------------------------------
// 5) Passing MULTIPLE VALUES TO FUNCTION (unknown count)
//    Using REST parameters
// ---------------------------------------------------------

function total(...numbers) { // ... collects all values into array
  let t = 0;
  for (let n of numbers) {
    t += n;
  }
  return t;
}

console.log(total(1, 2, 3, 4, 5)); 
// Output: 15


// ---------------------------------------------------------
// 6) Passing ARRAY to function
// ---------------------------------------------------------

let nums = [10, 20, 30];

function sumArray(arr) {
  let total = 0;
  for (let n of arr) {
    total += n;
  }
  return total;
}

console.log(sumArray(nums)); 
// Output: 60


// ---------------------------------------------------------
// 7) Spread operator while calling function
// ---------------------------------------------------------

function addThree(a, b, c) {
  return a + b + c;
}

let values = [5, 10, 15];

console.log(addThree(...values)); 
// Output: 30
