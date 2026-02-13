//Immediate Invoked Function Expression (IIFE)
/*

An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that:

Is defined, and

runs immediately after it’s created.

You don’t call it later. It calls itself right away.

*/
//syntax
(function () {
  console.log("I run immediately!");//in this body you can write that need to execute immediately
  //it's a private scope
})();

