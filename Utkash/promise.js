// let myVar = new Promise((resolve, reject) => {
//   let a = 1;
//   if (a == 10) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let api = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(api); it returns a promise
// api
//   .then((data) => {
//     // console.log(data);// it returns a response object
//     let finalData = data.json();
//     // console.log(finalData);
//     finalData
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchAPI() {
  let api = await fetch("https://jsonplaceholder.typicode.com/todos");
  let finalData = await api.json();
  console.log(finalData);
}

fetchAPI();
