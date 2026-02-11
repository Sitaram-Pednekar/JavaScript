/*
Objects in JavaScript

Syntax:

const obj = {
    key: "value",
    key2: "value2"
    // You can have multiple key-value pairs
}
*/

// Let's create an object
const Customer = {
    Name: "Twisty",
    ID: '01',
    Pincode: "40000"
};

// Accessing object properties
console.log(Customer.ID);       // Output: 01
console.log(Customer.Name);     // Output: Twisty
console.log(Customer.Pincode);  // Output: 40000

// Modern/recommended way: bracket notation
console.log(Customer['ID']);       // Output: 01
console.log(Customer['Name']);     // Output: Twisty
console.log(Customer['Pincode']);  // Output: 40000

/*
Symbols as object keys
- Symbols are unique identifiers
- Must create symbol first before using as key
*/
let sym = Symbol("Key1");
console.log(typeof sym); // Output: symbol

const Customer1 = {
    Name: "Twisty",
    ID: '01',
    [sym]: "key3", // Using symbol as a key
    Pincode: "40000"
};

console.log(typeof Customer1[sym]); // Output: string

/*
Object.freeze()
- Freezes the object so properties can't be changed
*/

// Normal object modification
console.log(Customer['ID']); // Output: 01
Customer.ID = "123";
console.log(Customer['ID']); // Output: 123

Customer.ID = '01'; // Resetting to default

// Freeze object
Object.freeze(Customer1);
Customer1.ID = "123"; 
console.log(Customer1.ID); // Output: 01 (unchanged because object is frozen)
