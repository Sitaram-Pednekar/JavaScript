/*
================================================================
====================== 1) USER DETAILS ==========================
================================================================
*/

// Creating a student object to store user-related information
// Objects are reference types and store data in key–value pairs
const student = {
  id: Symbol("S1"),        // Symbol creates a unique ID
  name: "Twisty",          // Student name (string)
  age: 20,                 // Student age (number)
  isPresent: true,         // Attendance status (boolean)
  marks: [80, 75, 90]      // Marks stored in an array
};

// Mutating the object by changing the age property
// This is allowed even though 'student' is declared with const
student.age = 21;

// Printing the updated student object
console.log(student);


/*
================================================================
====================== 2) SIMPLE CALCULATOR =====================
================================================================
*/

// String values that look like numbers
let num1 = "10";
let num2 = "5";

// Converting string values into numbers using Number()
// Without conversion, '+' would perform string concatenation
let result = Number(num1) + Number(num2);

// Printing the calculated result
console.log(result); // Output: 15


/*
================================================================
====================== 3) USER LOGIN CHECK ======================
================================================================
*/

// Storing login credentials
let username = "admin";
let password = "1234";

// Using strict comparison (===) and logical AND (&&)
// Both conditions must be true for successful login
if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}


/*
================================================================
====================== 4) FULL NAME GENERATOR ===================
================================================================
*/

// First and last name stored separately
let firstName = "Twisty";
let lastName = "Sneeze";

// Combining both names using template literals
// toUpperCase() converts the string to uppercase
let fullName = `${firstName} ${lastName}`.toUpperCase();

// Printing the full name
console.log(fullName);


/*
================================================================
====================== 5) COPY vs REFERENCE =====================
================================================================
*/

// Creating an object
let user1 = { name: "Twisty" };

// Creating a real copy using spread operator
// This avoids reference issues
let user2 = { ...user1 };

// Changing the copied object's data
user2.name = "IT Guy";

// Original object remains unchanged
console.log(user1.name); // Twisty
console.log(user2.name); // IT Guy


/*
================================================================
====================== 6) ATTENDANCE TRACKER ====================
================================================================
*/

// Array of student objects
let students = [
  { name: "A", present: true },
  { name: "B", present: false }
];

// Updating attendance for student B
students[1].present = true;

// Printing updated attendance list
console.log(students);


/*
================================================================
====================== 7) TYPE CHECKER ==========================
================================================================
*/

// Function to display value and its data type
function checkType(value) {
  console.log(`Value: ${value}, Type: ${typeof value}`);
}

// Calling function with different data types
checkType(10);        // number
checkType("Hello");   // string
checkType(true);      // boolean


/*
================================================================
====================== 8) MINI BANKING RECORD ===================
================================================================
*/

// Creating a bank account object
const account = {
  holder: "Twisty",
  balance: 1000
};

// Function to add money to the account
// Objects are passed by reference
function deposit(amount) {
  account.balance += amount;
}

// Depositing money
deposit(500);

// Printing updated balance
console.log(account.balance); // Output: 1500
