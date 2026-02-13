/* ------------------------------------------------------------
   ELSE IF (multiple conditions)

   Used when we have many conditions to check.
   JavaScript checks from TOP to BOTTOM.
   First true condition will execute and stop.
------------------------------------------------------------ */

let score = 75;

if (score >= 90) {
  console.log("Grade A");   // execution
} else if (score >= 70) {
  console.log("Grade B");   // execution
} else if (score >= 50) {
  console.log("Grade C");   // execution
} else {
  console.log("Fail");      // execution
}



/* ------------------------------------------------------------
   IMPORTANT: CONDITIONS USE COMPARISON OPERATORS

   >   greater than
   <   less than
   >=  greater than equal
   <=  less than equal
   ==  value compare
   === value + type compare (best practice)
------------------------------------------------------------ */

let x = "10";

if (x == 10) {
  console.log("Using ==");   // execution (true)
}

if (x === 10) {
  // will not run because types are different
}



/* ------------------------------------------------------------
   LOGICAL OPERATORS IN IF

   &&  AND  (both conditions must be true)
   ||  OR   (any one condition true)
   !   NOT  (reverse the result)
------------------------------------------------------------ */

let user = true;
let admin = false;

if (user && admin) {
  console.log("Full access");
} else {
  console.log("Limited access");   // execution
}



/* ------------------------------------------------------------
   NESTED IF (if inside if)

   Used when condition depends on another condition
------------------------------------------------------------ */

let number = 10;

if (number > 0) {

  if (number % 2 === 0) {
    console.log("Positive Even");   // execution
  }

}



/* ------------------------------------------------------------
   TERNARY OPERATOR (SHORT IF ELSE)

   condition ? true_part : false_part
------------------------------------------------------------ */

let num = 5;

num % 2 === 0
  ? console.log("Even")
  : console.log("Odd");   // execution

