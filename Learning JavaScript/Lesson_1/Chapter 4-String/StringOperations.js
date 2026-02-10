
//String


//In ths chapter we will discuss about String operators
//String means a word but in this JavaScript we can perform operations by using operators
//let's see how

let A="abc";
let B="cdf";
//we taken 2 values from  A and B variable

//let's add them what will the output
//see in actual machine code this A and B variable gets converted into binary number that are (0, 1);
//In this scenario logically answer will be different.

//In this scenario the JavaScript machine does A+B = "abccdf"
//let's check 
console.log(A+B);
//output wil "abccdf"


//let's do string 2 string creation again and we will perform all operation on them
let name="Twisty";
let surname="Sneeze";

let fullname= name + " " + surname;//here we just added the name and surname with 1 blank cell.
console.log(fullname);//the output should be "Twisty Sneeze"

//let's find out length of the string
console.log(fullname.length);
//here direct this value we can store in variable also
let FullNameLength = fullname.length;
console.log(FullNameLength);
//both values are same and valid

//if we need to find the particular value means what is the second no. or what is the first no.'s alphabet

//the counting starts from 0 so don't confuse 
//like example we take the word "Hello"
//in this H is on 0th no.
//Hello
//01234
//here are 5 number but because we are starting counting from the 0 the no. should be only upto 4.

console.log(name[0]);//the 0 can be replacable. Whichever number you should put on that number which alphabet is , the compiler will print on the screen or terminal
//the result will be "T"

// | Method                  | Use              | Example                                     |
// | ----------------------- | ---------------- | ------------------------------------------- |
// | `slice(start, end)`     | Extract part     | `"JavaScript".slice(0,4)` → `"Java"`        |
// | `substring(start, end)` | Similar to slice | `"JavaScript".substring(4,10)` → `"Script"` |
// | `substr(start, length)` | (legacy)         | `"JavaScript".substr(4,6)` → `"Script"`     |

console.log(name.slice(0 , 3));
console.log(name.substring(0,3));
console.log(surname.substr(2,3));
//or we can store in variables also


//here some more like uppercase and lowercase
console.log(fullname.toUpperCase);
console.log(fullname.toLowerCase);


