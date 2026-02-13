/*

============================================================
   FOR LOOP IN JAVASCRIPT ------ IN DEPTH
============================================================


*/






/* ------------------------------------------------------------
   INFINITE LOOP (DANGEROUS)

   When condition never becomes false
------------------------------------------------------------ */

// for (;;) {//there is nothing in initialization , condition and iteration
//   // infinite loop because no condition
// }



/* ------------------------------------------------------------
   LOOP WITH MULTIPLE VARIABLES
------------------------------------------------------------ */

for (let i = 0, j = 10; i < j; i++, j--) {//seperated by comma(,)
  // two variables controlled together
}



/* ------------------------------------------------------------
   LOOP WITHOUT INITIALIZATION
------------------------------------------------------------ */

let i = 0;

for (; i < 5; i++) {
  // initialization done outside
}



/* ------------------------------------------------------------
   LOOP WITHOUT UPDATE
------------------------------------------------------------ */

let k = 0;

for (; k < 5;) {
  k++; // manual update inside, the same concept in while loop also
}



/* ------------------------------------------------------------
   LOOP WITHOUT CONDITION (CONTROLLED INSIDE)
------------------------------------------------------------ */

let x = 0;

for (;;) {
  if (x === 5) break;
  x++;
}



/* ------------------------------------------------------------
   BREAK STATEMENT

   break → immediately exits the loop completely
------------------------------------------------------------ */

for (let n = 0; n < 10; n++) {
  if (n === 5) break; // loop stops here
}



/* ------------------------------------------------------------
   CONTINUE STATEMENT

   continue → skips current iteration
              jumps to update step
------------------------------------------------------------ */

for (let n = 0; n < 5; n++) {
  if (n === 2) continue; // skip when n=2
  // rest of code runs for other values
}



/* ------------------------------------------------------------
   NESTED FOR LOOP

   Loop inside another loop
------------------------------------------------------------ */

for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    // inner loop runs fully for each outer loop
  }
}



/* ------------------------------------------------------------
   LABEL WITH BREAK (ADVANCED)

   Used to break outer loop from inner loop
------------------------------------------------------------ */

outerLoop:
for (let a = 0; a < 3; a++) {
  for (let b = 0; b < 3; b++) {
    if (b === 1) break outerLoop;
  }
}



/* ------------------------------------------------------------
   LABEL WITH CONTINUE (ADVANCED)

   Skips outer loop iteration
------------------------------------------------------------ */

outer:
for (let a = 0; a < 3; a++) {
  for (let b = 0; b < 3; b++) {
    if (b === 1) continue outer;
  }
}



/* ------------------------------------------------------------
   REVERSE LOOP (DECREMENT)
------------------------------------------------------------ */

for (let i = 10; i > 0; i--) {
  // countdown loop
}



/* ------------------------------------------------------------
   USING FOR LOOP WITH ARRAYS (INDEX BASED)
------------------------------------------------------------ */

let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  // access arr[i]
}



/* ------------------------------------------------------------
   SCOPE OF VARIABLE INSIDE FOR LOOP

   let/const inside for are block scoped
------------------------------------------------------------ */

for (let i = 0; i < 3; i++) {
  const msg = "Hi";
  // msg exists only in this block iteration
}



/* ------------------------------------------------------------
   TIMING OF UPDATE STEP

   update runs AFTER code block, BEFORE next condition check
------------------------------------------------------------ */



/* ------------------------------------------------------------
   COMMON MISTAKE

   Using <= instead of < may run extra iteration
------------------------------------------------------------ */

// for (let i = 0; i <= 5; i++)  // runs 6 times



/* ------------------------------------------------------------
   PERFORMANCE NOTE

   for loop is fastest when you need index control
------------------------------------------------------------ */