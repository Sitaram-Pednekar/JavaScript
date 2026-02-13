/* ------------------------------------------------------------

/* ============================================================
   DO-WHILE LOOP 
   ============================================================

   These loops are used when:
   - You DON'T know exactly how many times to run
   - Loop depends on a condition becoming false
*/

/* ------------------------------------------------------------
   DO...WHILE LOOP

   Syntax:

   do {
       // code
   } while (condition);

   - Code runs FIRST
   - Condition checked AFTER
   - Runs AT LEAST ONE TIME always
------------------------------------------------------------ */

let j = 0;

do {
  j++;
} while (j < 5);



/* ------------------------------------------------------------
   EXECUTION FLOW OF DO...WHILE

   Step 1: execute code
   Step 2: check condition
            true  → repeat
            false → stop
------------------------------------------------------------ */



/* ------------------------------------------------------------
   DIFFERENCE BETWEEN WHILE AND DO...WHILE
------------------------------------------------------------

   while:
   - condition first
   - may run 0 times

   do...while:
   - code first
   - runs at least once
------------------------------------------------------------ */

