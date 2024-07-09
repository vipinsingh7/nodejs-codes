// fs stands for file system. using fs we can perform operations on files such as CRUD. (create, readd, update, delete)

//!================ fs sync=================
//! always import the built in modules first

const fs = require("fs"); // syntax == const varName = require("module-name")

// console.log(fs);

//! 1) creating a file synchronously
// method name == writeFileSync()
// syntax == fs.writeFileSync("path/filename","data to be added")

// if the file is not created it will create a new file otherwise it will simply over-write the existing data

// console.log("start");
// fs.writeFileSync("./data.txt", "new data");
// console.log("middle");
// console.log("end");

//! 2) reading a file synchronously
// method name == readFileSync()
// syntax == fs.readFileSync("path", "encoding")

// console.log("start");
// let data = fs.readFileSync("./data.txt");
// console.log(data.toString()); // use toString() to convert buffer data to string
// console.log("middle");
// console.log("end");

// let readFile = fs.readFileSync("./data.txt", "utf-8"); // provide encoding to display data in string format
// console.log("🚀 ~ readFile:", readFile);
//! 3) update/append file synchronously`
// method name == appendFileSync()
// syntax == fs.appendFileSync("path/filename","data to be added")
`
// console.log("start");
// fs.appendFileSync("./data.txt", " data added using append File");
// console.log("middle");
// console.log("end");

// fs.appendFileSync("./server.js", "this is a server file");

// if the file is not created it will create a new file otherwise it will simply append(add) the new data.

//! 4) deleting a file synchronously
// method name == unlinkSync()
// syntax == fs.unlinkSync("path/filename")

// console.log("start");
// fs.unlinkSync("./data.txt");
// console.log("middle");
// console.log("end");

//! 5) renaming a file synchronously
// method name == renameSync()
// syntax == fs.renameSync("path/filename","new filename")

// fs.renameSync("./index.html", "data.json");

//! 6) creating a folder
// method name == mkdirSync()
// syntax == fs.mkdirSync("path/filename")

// fs.mkdirSync("./public");

//! 7) renaming a folder
// method name == renameSync()
// syntax == fs.renameSync("path/filename","new filename")

// fs.renameSync("./public", "private");

//! 8) deleting a folder
// method name == rmdirSync()
// syntax == fs.rmdirSync("path/filename")

// fs.rmdirSync("./private");

//!================ fs async=================

//? in nodejs all the async operations are handled by LIBUV. it is a c library which specifically aimed to perform i/o operations.

//! 1) write file async
// method name == writeFile()
// syntax == fs.writeFile("path", "data", callback)

// console.log("start");
// fs.writeFile("./data.txt", "this is new data", (err) => {
//     if (err) console.log(err);
//   console.log("file created");
// });
// console.log("middle");
// console.log("end");

//! 2) read file async
// method name == readFile()
// syntax == fs.readFile("path", "encoding", callback)

// console.log("start");
// fs.readFile("./fs.js", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("middle");
// console.log("end");

//! 3) append/update file async
// method name == appendFile()
// syntax == fs.appendFile("path", "data to be added", callback)

fs.appendFile("./data.txt", " hello world", (err) => {
  if (err) throw err;
  console.log("file appended");
});
