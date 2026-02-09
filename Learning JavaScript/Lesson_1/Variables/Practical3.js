//TYPECONVERSION




//In javascript the main problem is we didn't know what is the datatype without using typeof method that's why people also learn typescript
//let's see practically how the conversion works in javascript


//let's make an string variable that stores some value
let Y= "33";
console.log(Y)//the output will 33

//to check type of this variable 
console.log(typeof Y)//like this syntax also we can use no need of brackets but using brackets feels strictness and good for practice

//now we convert it into integer and 33 is a number makes valid reason

let X= Number(Y);//here we are using Number function that converts the variable into integer
console.log(X);//the output will 33

//let's check the type of this variable
console.log(typeof(X));//it shows Number means it converted to Number

//here's a catch if we do something like this
let A="33abc";//where not only number but also an alphabet if we convert it let's see what happened
console.log(A);//firstly we print to see what actually it stores
//to see type
console.log(typeof(A));

//let's convert
let B=Number(A);//now it will convert to Number but when we print it shows NaN
//NaN
//it simply mean not a number means the compiler feels like there is an error.


// what we discussed
/* 
Y="33" => valid for Number
Y="33abc" => invalid for Number => error NaN

*/

//let's see about boolean
//In boolean 0 => true & 1 => false
let K= 1;
let M= Boolean(K);
//output will be true

// let K="abc";
// let M=Boolean(K);
//output will be true
//in this case there is something value is present, the variable is null then only it writes 0 otherwise true or 1;

