// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//    res.write("Hello world");
//    res.end();
// });
// server.listen(3000, () => {
//    console.log("Server started ");
// });
// function anyo(module, exports, require, __dirname, __filename) {

const express = require("express");
// const t = require("./test");
// const ob = require("./value");
const app = express();

app.get("/", (req, res) => {
   res.json("Hello World");
});
app.get("/hello", (req, res) => {
   res.json("World");
});
// app.get("/classes", () => { });
// app.post("/classes", () => { });
// app.put("/classes", () => { });
// app.delete("/classes", () => { });


app.listen(3000, (err) => {
   console.log("Server started");
});


// }

// class, student, staff, staff/teachers, assets
// /classes (get[Retrieve], post[Create], put[Update], patch[Partial Update], delete[Delete])