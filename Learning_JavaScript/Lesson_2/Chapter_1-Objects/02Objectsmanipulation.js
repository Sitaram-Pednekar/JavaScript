// Objects with Methods

const User = {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode: '4040'
};

// Adding a method to the object
/*
Syntax:
object_name.function_name = function(){
    // body
}
*/

User.AllDetails = function() {
    console.log("Hello, My name is Twisty from India");
};

console.log(User.AllDetails());
// Output:
// Hello, My name is Twisty from India
// undefined is printed after because the function has no return value

// Accessing parent object keys using 'this'
User.accessing = function() {
    console.log(`${this.Name}`); // backticks used for template literal
};

console.log(User.accessing());
// Output:
// Twisty
// undefined is printed after because the function has no return value
