/* ============================================================
   forEach LOOP IN JAVASCRIPT (Array method)
   ============================================================

   forEach is NOT a loop statement.
   It is an ARRAY METHOD.

   Used to iterate over array values.
*/



/* ------------------------------------------------------------
   SYNTAX

   array.forEach(function(value, index, array) {
       // code
   });

   value → current element
   index → position
   array → original array
------------------------------------------------------------ */

let arr = [10, 20, 30];

arr.forEach(function(value, index, array) {
  // value = 10,20,30
  // index = 0,1,2
});



/* ------------------------------------------------------------
   USING ARROW FUNCTION (common)
------------------------------------------------------------ */

arr.forEach((value, index) => {
  // cleaner syntax
});



/* ------------------------------------------------------------
   IMPORTANT RULES OF forEach
------------------------------------------------------------

   1) Works ONLY with arrays
   2) Cannot use break
   3) Cannot use continue
   4) Does not return anything
   5) Always runs for all elements
------------------------------------------------------------ */



/* ------------------------------------------------------------
   WHY break / continue DO NOT WORK
------------------------------------------------------------ */

arr.forEach((v) => {
  if (v === 20) {
    // break ❌ not possible
    // continue ❌ not possible
  }
});



/* ------------------------------------------------------------
   forEach DOES NOT RETURN VALUE
------------------------------------------------------------ */

let result = arr.forEach(v => v * 2);
// result is undefined



/* ------------------------------------------------------------
   MODIFYING ARRAY INSIDE forEach
------------------------------------------------------------ */

arr.forEach((v, i, a) => {
  a[i] = v * 2;
});



/* ------------------------------------------------------------
   forEach vs for...of
------------------------------------------------------------

   forEach:
   - array only
   - no break/continue
   - callback style

   for...of:
   - any iterable
   - supports break/continue
   - loop style
------------------------------------------------------------ */
