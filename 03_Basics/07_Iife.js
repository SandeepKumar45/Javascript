// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); // --> this semicolon is requried that means this function is ended here ,
//     if you not put the semicolon then the next IIFE will not execute and give error

((name) => {
  // Unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

// NOTE: When you need to write two or more IIFE then put semicolon after calling to this function ();

// NOTE: This pattern is often used to create a private scope for variables to avoid polluting the global scope,
//       encapsulate code, and achieve various other purposes.

// +++++++++++++++ example +++++++++++

(function () {
  const message = "Hello from the IIFE!";
  console.log(message);
})();

// The variable `message` is not accessible outside the IIFE scope
// It helps prevent polluting the global scope
// Output: Hello from the IIFE!

const result = (function (a, b) {
  return a + b;
})(10, 20);

console.log(result); // Output: 30

//  ************* Own Scope and Don't pollute the global scope ************
const greet = "global variable";
const gretting = () => {
  return "hello global function";
};

(() => {
  const greet = "IIFE variable";
  const gretting = () => {
    return "hello IIFE function";
  };
  console.log(greet);
  console.log(gretting());
})();

console.log(greet);
console.log(gretting());
