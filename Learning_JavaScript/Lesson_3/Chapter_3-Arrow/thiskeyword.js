/* ============================================================
   THIS KEYWORD + ARROW FUNCTION — COMPLETE EXPLANATION
   ============================================================ */


/* ------------------------------------------------------------
   1) 'this' in a Normal Function
   ------------------------------------------------------------

   In a normal function, the value of 'this' depends on
   HOW the function is called (call-site).

   If called directly → this refers to global object.
*/

function show() {
  console.log(this);   // global object (window in browser, global in Node)
}

show();  // direct call


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   2) 'this' inside an Object Method (Normal Function)
   ------------------------------------------------------------

   When a function is called using object.method(),
   'this' refers to that object.
*/

let user = {
  name: "Twisty",

  greet: function () {
    console.log(this.name); // 'this' refers to 'user' object
  }
};

user.greet(); // Output: Twisty


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   3) Problem: Normal Function inside Object Method
   ------------------------------------------------------------

   A normal function inside another function
   does NOT inherit 'this' from parent.

   It again follows default rule → global object.
*/

let person = {
  name: "Sam",

  greet: function () {

    function inner() {
      console.log(this.name); 
      // 'this' is global here, NOT 'person'
    }

    inner();
  }
};

person.greet(); // Output: undefined


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   4) Arrow Function Solves This Problem
   ------------------------------------------------------------

   Arrow functions DO NOT create their own 'this'.

   They borrow 'this' from their parent scope.
   This is called LEXICAL THIS.
*/

let person2 = {
  name: "Sam",

  greet: function () {

    let inner = () => {
      console.log(this.name); 
      // Arrow takes 'this' from greet()
    };

    inner();
  }
};

person2.greet(); // Output: Sam


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   5) Arrow Function as Object Method (WRONG USE)
   ------------------------------------------------------------

   Arrow function should NOT be used as object method.

   Because arrow does not bind 'this' to the object.
*/

let obj = {
  name: "Alex",

  greet: () => {
    console.log(this.name);
    // 'this' is from outer/global scope, not 'obj'
  }
};

obj.greet(); // Output: undefined


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   6) Normal vs Arrow — how 'this' behaves
   ------------------------------------------------------------ */

function normal() {
  console.log(this);  // depends on how called
}

let arrow = () => {
  console.log(this);  // always parent scope
};

normal(); // global object
arrow();  // parent scope this


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   7) 'this' in Event Listeners (Very Important Real Case)
   ------------------------------------------------------------

   In event listeners, 'this' refers to the element
   that triggered the event — ONLY with normal function.
*/

// Assume button is a DOM element

button.addEventListener("click", function () {
  console.log(this); // refers to button element
});

button.addEventListener("click", () => {
  console.log(this); // NOT button, parent scope
});


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   8) Arrow Function Syntax (short syntax)
   ------------------------------------------------------------ */

let add = (a, b) => a + b;

let square = n => n * n;

let msg = () => console.log("Hello");


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   9) Arrow Function CANNOT be used as Constructor
   ------------------------------------------------------------

   Arrow functions do not have 'this' of their own,
   so they cannot be used with 'new'.
*/

let Person = (name) => {
  this.name = name;
};

// let p = new Person("Sam"); ❌ Error


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   Normal function CAN be used as constructor
   ------------------------------------------------------------ */

function Person2(name) {
  this.name = name;
}

let p = new Person2("Sam"); // ✅ Works


/* ========================================================================================================================*/

/* ------------------------------------------------------------
   10) Arrow Function has NO 'arguments' object
   ------------------------------------------------------------ */

function normalFunc() {
  console.log(arguments); // available
}

let arrowFunc = () => {
  // console.log(arguments); ❌ Not available in arrow
};

