/* ============================================================
   for...of LOOP IN JAVASCRIPT (called "for all" by many)
   ============================================================

   for...of is used to iterate over VALUES
   from ITERABLE objects.

   Iterable means:
   - Array
   - String
   - Map
   - Set
   - NodeList
   - Arguments
*/



/* ------------------------------------------------------------
   SYNTAX

   for (variable of iterable) {
       // code
   }

   variable → stores each VALUE
------------------------------------------------------------ */

let arr = [10, 20, 30];

for (let value of arr) {
  // value = 10, 20, 30
}



/* ------------------------------------------------------------
   for...of WITH STRING
------------------------------------------------------------ */

let str = "JS";

for (let ch of str) {
  // ch = 'J', 'S'
}



/* ------------------------------------------------------------
   for...of WITH SET
------------------------------------------------------------ */

let set = new Set([1, 2, 3]);

for (let v of set) {
  // v = 1, 2, 3
}



