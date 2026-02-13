/* ============================================================
   IF / ELSE / SWITCH — COMPLETE IN-DEPTH EXPLANATION
   Everything important is written in comments.
   Only execution lines actually run.
   ============================================================ */



/* ------------------------------------------------------------
   WHAT IS IF STATEMENT ?

   'if' is used to make decisions in a program.

   It checks a condition.
   If condition is TRUE → code runs
   If condition is FALSE → code skips
------------------------------------------------------------ */

let age = 20;

if (age >= 18) {          // condition check
  console.log("Eligible to vote");   // execution
}



/* ------------------------------------------------------------
   IF ELSE

   If condition is true → IF block runs
   If condition is false → ELSE block runs
------------------------------------------------------------ */

let marks = 30;

if (marks >= 35) {
  console.log("Pass");     // execution
} else {
  console.log("Fail");     // execution
}





/* ------------------------------------------------------------
   SWITCH STATEMENT

   Used when we compare ONE value with MANY options.
   Cleaner than multiple else-if.
------------------------------------------------------------ */

let day = 3;

switch (day) {

  case 1:
    console.log("Monday");   // execution
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday"); // execution
    break;

  default:
    console.log("Invalid day");
}



/* ------------------------------------------------------------
   VERY IMPORTANT: break in switch

   Without 'break', execution continues to next case.
   This is called FALL THROUGH.
------------------------------------------------------------ */

let value = 1;

switch (value) {

  case 1:
    console.log("One");   // execution

  case 2:
    console.log("Two");   // also executes because no break
}



/* ------------------------------------------------------------
   Multiple cases with same output
------------------------------------------------------------ */

let fruit = "apple";

switch (fruit) {

  case "apple":
  case "mango":
  case "banana":
    console.log("Fruit is sweet");   // execution
    break;

  default:
    console.log("Unknown fruit");
}



/* ------------------------------------------------------------
   WHEN TO USE WHAT ?

   if / else → when conditions are ranges or complex
   switch    → when checking equality of one value
------------------------------------------------------------ */
