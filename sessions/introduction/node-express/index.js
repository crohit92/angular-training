
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const studentsRouter = require("./students/students.controller");
app.use(function logger(req, res, next) {
   console.log("Request came at: " + new Date().toDateString());
   next();
   console.log("Response sent at: " + new Date().toDateString());
});

/**
 * Students -> Courses -> Subjects -> Books
 * 1. Get all students
 * 2. Get all courses for a perticular student
 * 3. Get one course of a student
 * 4. Get all subjects in one course of a student
 * Students -> Fees
 */

// app.get("/staff", () => { });
// app.get("/staff/:id", () => { });
// app.get("/staff/:id/courses", () => { });
// app.get("/staff/:id/courses/:courseId", () => { });
// app.get("/staff/:id/courses/:courseId/subjects", () => { });


// app.get("/students", () => { });
// app.get("/students/:id", () => { });
// app.get("/students/:id/courses", () => { });
// app.get("/students/:id/courses/:courseId", () => { });
// app.get("/students/:id/courses/:courseId/subjects", () => { });




app.use("/students", studentsRouter);

// var extractToken = function (req, res, next) {
//    const header = req.get("Authorization");
//    if (header) {
//       next();
//    } else {
//       next({
//          message: "Invalid Request"
//       })
//    }
//    console.log("Middleware 1");
// }
// var m2 = function (req, res, next) {
//    console.log("Middleware 2");
//    // res.json("Hello");
//    next();
//    console.log("M2 end");

// }
// var m3 = function (req, res, next) {
//    console.log("Middleware 3");
//    next();
//    console.log("M3 end");
// }

// app.use(extractToken, m3, m2);

// app.get("/classes", (req, res, next) => {
//    res.json(["A", "B", "C"]);
//    next()
// }, m2)

// app.use((err, req, res, next) => {
//    console.log(err);
//    next(JSON.stringify(err))
// });
app.listen(3000, (err) => {
   console.log("Server started");
});

// function one() {
//    var x = 12;
//    two();
//    var y = x + 10;
// }
// function two() {

// }

// one();
