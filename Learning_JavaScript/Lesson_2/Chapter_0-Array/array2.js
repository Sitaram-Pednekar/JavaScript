/* 
Array Basics: Merging Arrays
*/

// Here we are taking some more arrays
let myArr = [0, 1, 2, 3, 4];
let myArr2 = [5, 6, 7];

// Display the arrays
console.log(myArr);   // Output: [0, 1, 2, 3, 4]
console.log(myArr2);  // Output: [5, 6, 7]

// Using push to add one array into another
// This pushes the second array as a single element
console.log(myArr.push(myArr2)); // Output: 6 (new length of array)

// Check what myArr looks like after push
console.log(myArr); // Output: [0, 1, 2, 3, 4, [5, 6, 7]]
// Notice: myArr2 is added as a nested array, not merged

/* 
To merge arrays properly, we use concat()
- concat() returns a new array, original arrays remain unchanged
*/
console.log(myArr.concat(myArr2)); // Output: [0, 1, 2, 3, 4, [5, 6, 7], 5, 6, 7]

// Alternatively, use spread operator to merge
console.log([...myArr, ...myArr2]); // Output: [0, 1, 2, 3, 4, [5, 6, 7], 5, 6, 7]


//let's another topic is direct array which we can print
console.log(Array.isArray("Twisty"));//the output should be false
console.log(Array.from("Twisty Sneeze"));
/*
the output should look like this
[
  'T', 'w', 'i', 's',
  't', 'y', ' ', 'S',
  'n', 'e', 'e', 'z',
  'e'
]
*/

//example 2
//let's make 5 variables
let A=500;
let B=501;
let C=502;
let D=503;
let E=504;

console.log(Array.of(A , B , C , D , E));
/*

output:
[ 500, 501, 502, 503, 504 ]

*/