/* ============================================================
   FOR LOOP IN JAVASCRIPT
   ============================================================

   The "for" loop is used when we know:
   - where to start
   - where to stop
   - how to move (increment/decrement)

   Basic Syntax:

   for (initialization; condition; update) {
       // code block
   }

   1) initialization  → runs ONLY ONCE at the start
   2) condition       → checked BEFORE every iteration
   3) update          → runs AFTER every iteration
*/



/* ------------------------------------------------------------
   EXECUTION FLOW (VERY IMPORTANT)

   Step 1: initialization
   Step 2: condition check
            true  → enter loop
            false → exit loop
   Step 3: code inside block executes
   Step 4: update statement
   Step 5: again go to condition
------------------------------------------------------------ */



/* ------------------------------------------------------------
   SIMPLE EXAMPLE STRUCTURE
------------------------------------------------------------ */

for (let i = 0; i < 5; i++) {
  // runs 5 times: i = 0,1,2,3,4
}

//let's print hello world 10 times

for(let i=0; i<=10;i++){
    console.log("Hello World\n");
}
/*
//output

Hello World

Hello World

Hello World

Hello World

Hello World

Hello World

Hello World

Hello World

Hello World

Hello World

Hello World

*/