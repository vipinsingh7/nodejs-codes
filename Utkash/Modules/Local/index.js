//! modules ==> it is a logical piece of code which can be reused.
//! it helps us to breakdown our code into smaller bits and helps to maintain the code

//? in nodejs we have three modules ==> built-in, local, third party modules

//? local modules ==> modules which are defined/created by users

//? third party modules ==> modules which are installed from other sources(npm). examples: mongodb, express, jwt, bcrypt, dotenv, etc...

//? built-in modules => modules which are installed during the installation of nodejs or already present and no need to install it from any other sources. examples ==> fs, http, crypto, os, path, etc...

// function sum(a, b) {
//   return a + b;
// }

// let sum = (a, b) => {
//   return a + b;
// };

// function sub(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// console.log(sum(1, 1));
// console.log(sum(1, 3));
// console.log(sum(1, 2));

//! 1st way of exporting
// module.exports = {
//   sum,
//   sub,
//   divide,
// };

//!============================================
//! 2nd way of exporting

exports.sum = (a, b) => {
  return a + b;
};

exports.mul = (a, b) => {
  return a * b;
};

exports.greetings = () => {
  console.log("hello");
};

module.exports = {
  name: "a bc",
  age: 12,
};
