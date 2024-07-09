//! 1st way of importing
// import in a variable and access it's properties using dot operator.
// let myVar = require("./index");
// require("file-path")

// console.log(myVar);
// console.log(myVar.sub(2, 8));
// console.log(myVar.sum(1, 2));
// console.log(myVar.divide(10, 5));

//!===============================================
//! 2nd way of importing
// destructure the object
// let { sum, sub, divide } = require("./index");
// console.log(sum(3, 2));
// console.log(sub(3, 2));
// console.log(divide(3, 2));

//!======================================================================

// let value = require("./index");
// console.log(value.greetings());
// console.log(value.mul(20, 20));

// let { sum, greetings, mul } = require("./index");

// console.log(mul(2, 2));

let value = require("./index");
console.log(value);
