//Object

//let's make the function in object

const User= {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode:'4040'

}

//the simple method that where the syntax like
/*

object_name.function_name= function(){
    //body
}

*/

User.AllDetails = function(){
    console.log("Hello, My name is Twisty from India");

}//we made it

console.log(User.AllDetails());
/*

output:
    Hello, My name is Twisty from India

*/
//if need to access the key from their own parent object in function
//we uses "this" keyword how let's see

User.accessing = function(){
    console.log(`${this.Name}`);//we used backticks(`)
}

console.log(User.accessing());//prints Twisty