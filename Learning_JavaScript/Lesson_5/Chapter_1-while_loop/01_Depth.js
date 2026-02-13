/* ------------------------------------------------------------
   IMPORTANT: UPDATE MUST BE MANUAL

   Forgetting update causes INFINITE LOOP
------------------------------------------------------------ */

// while (i < 5) {
//   // no i++
// }





/* ------------------------------------------------------------
   EXAMPLE WHERE WHILE NEVER RUNS
------------------------------------------------------------ */

let x = 10;

while (x < 5) {
  // never executes
}



/* ------------------------------------------------------------
   SAME EXAMPLE WITH DO...WHILE
------------------------------------------------------------ */

let y = 10;

do {
  // executes one time even though condition false
} while (y < 5);



/* ------------------------------------------------------------
   USING BREAK IN WHILE / DO...WHILE
------------------------------------------------------------ */

let a = 0;

while (true) {
  if (a === 5) break;
  a++;
}



/* ------------------------------------------------------------
   USING CONTINUE IN WHILE
------------------------------------------------------------ */

let b = 0;

while (b < 5) {
  b++;
  if (b === 3) continue;
}



/* ------------------------------------------------------------
   COMMON USE CASES

   while:
   - Reading data until condition met
   - Waiting for user input
   - Unknown number of iterations

   do...while:
   - Menu driven programs
   - Run once then check condition
------------------------------------------------------------ */
