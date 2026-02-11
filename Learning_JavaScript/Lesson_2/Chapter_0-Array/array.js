/*
===========================
    ARRAY BASICS IN JS
===========================

1. Creating an Array:
- Arrays store multiple values in a single variable.
- Can contain strings, numbers, booleans, or even objects.
*/

let fruits = ["apple", "banana", "orange"]; // Array of strings
let numbers = [1, 2, 3, 4, 5];            // Array of numbers
let mixed = ["Twisty", 25, true];         // Mixed data types

console.log(fruits); // Output: ["apple", "banana", "orange"]
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(mixed);   // Output: ["Twisty", 25, true"]

/*
2. Accessing Array Items:
- Arrays are zero-indexed (first item is index 0)
*/

console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "orange"
console.log(fruits[3]); // Output: undefined (index does not exist)

/*
3. Adding Items:
- push() → adds to the end
- unshift() → adds to the start
*/

fruits.push("mango"); 
console.log(fruits); // Output: ["apple", "banana", "orange", "mango"]

fruits.unshift("strawberry");
console.log(fruits); // Output: ["strawberry", "apple", "banana", "orange", "mango"]

/*
4. Removing Items:
- pop() → removes from the end
- shift() → removes from the start
- splice(index, count) → removes from any position
*/

fruits.pop(); 
console.log(fruits); // Output: ["strawberry", "apple", "banana", "orange"]

fruits.shift(); 
console.log(fruits); // Output: ["apple", "banana", "orange"]

fruits.splice(1, 1); // Remove 1 item at index 1
console.log(fruits); // Output: ["apple", "orange"]

/*
5. Looping Through Arrays:
- You can use for, for..of, forEach
*/

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]); 
}
// Output: "apple", "orange"
//don't worry it's a loop where we will see in upcoming chapters


for(let fruit of fruits){
    console.log(fruit);
}
// Output: "apple", "orange"

fruits.forEach(function(fruit){
    console.log(fruit);
});
// Output: "apple", "orange"

/*
6. Array Methods Overview:
- length → number of items
- indexOf(value) → index of a value
- includes(value) → true/false if exists
- sort() → sorts array
*/

console.log(fruits.length);     // Output: 2
console.log(fruits.indexOf("orange")); // Output: 1
console.log(fruits.includes("banana")); // Output: false
console.log(fruits.sort());     // Output: ["apple", "orange"]
