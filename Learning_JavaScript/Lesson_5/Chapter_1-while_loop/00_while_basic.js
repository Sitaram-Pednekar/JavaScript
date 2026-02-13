/* ============================================================
   WHILE LOOP 
   ============================================================

   These loops are used when:
   - You DON'T know exactly how many times to run
   - Loop depends on a condition becoming false
*/



/* ------------------------------------------------------------
   WHILE LOOP

   Syntax:

   while (condition) {
       // code
   }

   - Condition is checked FIRST
   - If condition is false initially, loop NEVER runs
------------------------------------------------------------ */

let i = 0;

while (i < 5) {
  // runs while condition is true
  i++;
}



/* ------------------------------------------------------------
   EXECUTION FLOW OF WHILE

   Step 1: check condition
            true  → enter loop
            false → exit
   Step 2: execute code
   Step 3: update manually
   Step 4: go back to condition
------------------------------------------------------------ */



