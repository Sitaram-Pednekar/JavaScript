/* ============================================================
   NULLISH COALESCING (??)  &  TERNARY OPERATOR (?:)
   Complete explanation in comments
   ============================================================ */



/* ------------------------------------------------------------
   1) NULLISH COALESCING OPERATOR  (??)

   Syntax:
   value ?? defaultValue

   It returns the RIGHT side value ONLY IF
   the LEFT side value is:
   - null
   - undefined

   It DOES NOT treat 0, "", false as null.
------------------------------------------------------------ */

let a = null;
console.log(a ?? "Default");   // Default

let b = undefined;
console.log(b ?? "Default");   // Default

let c = 0;
console.log(c ?? "Default");   // 0 (because 0 is NOT null/undefined)

let d = "";
console.log(d ?? "Default");   // "" (empty string, still NOT null)

let e = false;
console.log(e ?? "Default");   // false



/* ------------------------------------------------------------
   DIFFERENCE BETWEEN ||  AND  ??

   || checks for FALSY values
   ?? checks ONLY for null and undefined
------------------------------------------------------------ */

let value1 = 0;

console.log(value1 || 100);  // 100 (0 is falsy)
console.log(value1 ?? 100);  // 0 (0 is not null/undefined)



/* ------------------------------------------------------------
   PRACTICAL USE CASE OF ??

   When you want to give default value
   but still allow 0, "", false as valid inputs
------------------------------------------------------------ */

function greet(name) {
  let finalName = name ?? "Guest";
  console.log("Hello", finalName);
}

greet(null);     // Hello Guest
greet("");       // Hello ""
greet("Twisty"); // Hello Twisty



/* ------------------------------------------------------------
   2) TERNARY OPERATOR (?:)

   Short form of if-else

   Syntax:
   condition ? true_part : false_part
------------------------------------------------------------ */

let age = 20;

age >= 18
  ? console.log("Adult")
  : console.log("Minor");



/* ------------------------------------------------------------
   TERNARY RETURNS VALUE (can store in variable)
------------------------------------------------------------ */

let marks = 40;

let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);   // Pass



/* ------------------------------------------------------------
   MULTIPLE CONDITIONS USING TERNARY
------------------------------------------------------------ */

let score = 85;

let grade =
  score >= 90 ? "A" :
  score >= 70 ? "B" :
  score >= 50 ? "C" :
  "Fail";

console.log(grade);  // B



/* ------------------------------------------------------------
   TERNARY WITH NULLISH COALESCING
------------------------------------------------------------ */

let username = null;

let displayName = username ?? "Guest";

displayName === "Guest"
  ? console.log("Default user")
  : console.log("Real user");
