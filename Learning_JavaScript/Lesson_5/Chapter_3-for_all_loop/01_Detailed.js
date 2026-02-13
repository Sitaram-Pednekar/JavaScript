/* ------------------------------------------------------------
   for...of WITH MAP
------------------------------------------------------------ */

let map = new Map([
  ["a", 1],
  ["b", 2]
]);

for (let [key, value] of map) {
  // key = "a", value = 1
  // key = "b", value = 2
}



/* ------------------------------------------------------------
   IMPORTANT: DOES NOT WORK WITH OBJECT

   Objects are NOT iterable
------------------------------------------------------------ */

let obj = { a: 10, b: 20 };

// for (let v of obj) ❌ Error



/* ------------------------------------------------------------
   HOW TO USE for...of WITH OBJECT
------------------------------------------------------------ */

for (let key of Object.keys(obj)) {
  // access obj[key]
}



/* ------------------------------------------------------------
   DIFFERENCE: for...in vs for...of

   for...in  → gives KEYS (indexes)
   for...of  → gives VALUES
------------------------------------------------------------ */

let arr2 = [100, 200];

for (let i in arr2) {
  // i = "0", "1"
}

for (let v of arr2) {
  // v = 100, 200
}



/* ------------------------------------------------------------
   break and continue WORKS
------------------------------------------------------------ */

for (let num of [1, 2, 3, 4]) {
  if (num === 2) continue;
  if (num === 4) break;
}



/* ------------------------------------------------------------
   DESTRUCTURING WITH for...of
------------------------------------------------------------ */

let pairs = [[1, "a"], [2, "b"]];

for (let [num, char] of pairs) {
  // num=1,char="a"
}



/* ------------------------------------------------------------
   BEST USE CASE

   Use for...of when you need VALUES directly
   and do NOT care about index
------------------------------------------------------------ */
