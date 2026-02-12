/* =========================================================
   SCOPE IN JAVASCRIPT — FULL EXPLANATION IN COMMENTS
   Scope = where a variable is accessible in the program
   ========================================================= */



/* -------------------- 1) GLOBAL SCOPE --------------------

   A variable declared outside any function or block
   is called a global variable.

   It can be accessed from anywhere in the program.
*/

let globalVar = 10;

function accessGlobal() {
  console.log(globalVar);   // accessing global variable inside function
}

accessGlobal();             // execution
console.log(globalVar);     // execution



/* -------------------- 2) FUNCTION SCOPE --------------------

   Variables declared with 'var' inside a function
   are accessible only inside that function.
*/

function functionScopeExample() {
  var x = 100;              // function scoped variable
  console.log(x);           // execution
}

functionScopeExample();     // execution
// console.log(x);          // would give error (outside function)



/* -------------------- 3) BLOCK SCOPE --------------------

   Variables declared with 'let' and 'const'
   are restricted to the block { } where they are created.
*/

{
  let b = 20;
  const c = 30;
  console.log(b, c);        // execution
}

// console.log(b);          // would give error
// console.log(c);          // would give error



/* -------------------- 4) var IGNORES BLOCK SCOPE --------------------

   'var' does NOT respect block scope.
   It leaks outside the block.
*/

{
  var leakedVar = 50;
}

console.log(leakedVar);     // execution



/* -------------------- 5) LOCAL SCOPE --------------------

   Variables declared inside a function are local
   and cannot be accessed outside.
*/

function localScope() {
  let msg = "Hello";
  console.log(msg);         // execution
}

localScope();               // execution
// console.log(msg);        // would give error



/* -------------------- 6) SHADOWING --------------------

   Inner variable with same name hides the outer variable.
*/

let n = 5;

function shadowExample() {
  let n = 10;               // shadows outer n
  console.log(n);           // execution
}

shadowExample();            // execution
console.log(n);             // execution



/* -------------------- 7) LEXICAL SCOPE --------------------

   Inner function can access variables of outer function.
*/

function outer() {
  let x = 100;

  function inner() {
    console.log(x);         // execution (access parent variable)
  }

  inner();                  // execution
}

outer();                    // execution



/* -------------------- 8) SCOPE CHAIN --------------------

   JavaScript searches variables from inner scope
   to outer scope until it finds the variable.
*/

let g = "Global";

function first() {
  function second() {
    console.log(g);         // execution (found in global)
  }
  second();                 // execution
}

first();                    // execution



/* -------------------- 9) HOISTING AND SCOPE --------------------

   'var' is hoisted and initialized with undefined.
   'let' and 'const' are hoisted but not initialized.
*/

console.log(v);             // execution (undefined)
var v = 10;

// console.log(l);          // would give error
let l = 20;



/* -------------------- 10) CLOSURE --------------------

   Inner function remembers variables of outer function
   even after outer function has finished execution.
*/

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);     // execution
  };
}

let c = counter();
c();                        // execution
c();                        // execution



/* -------------------- 11) LOCAL VS GLOBAL PRIORITY --------------------

   Local variable has higher priority than global.
*/

let z = 1;

function checkPriority() {
  let z = 2;
  console.log(z);           // execution
}

checkPriority();            // execution
console.log(z);             // execution
