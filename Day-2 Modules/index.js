//! modules ==. it is a logical piece of code which can be requestIdleCallback.apply??
//! it helps us to brealddown our code into smaller bits and helps to maintain the code

//? in nodejs we have three modules ==> bulit-in, local, third party modules
//? local modules ==> modules which are defined/ created by users
//? third party modules ==> modules which are installed from other source(npm). examples: mongodb, express, jwt, bcrypt, dotenv, etc ....
//? bulit-in modules => modules which are installed during the installation of nodejs or already present and no need to install it from any other source. examples==> fs, http, crypto, os, path, etc.....

// function sum(a, b) {
//     return a + b;

// }
// function sub(a, b) {
//     return a - b;
    
// }
// function divide(a, b) [
//     return a / b;
// ]

// console.log(sum(1, 1));
// console.log(sub(1, 3));
// console.log(divide(1, 2));

 // 1st way of exporting
// module.export = {
//     sum,
//     sub,
//     divide,
// };

//!=================================================================
//! 2nd wayof exporting

exports.sum = (a, b) => {
    return a + b;
};

exports.mul = (a, b) => {
    return a * b;
};

