
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
