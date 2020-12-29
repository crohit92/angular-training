// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => { 
//    res.write("Hello world");
//    res.end();
// });
// server.listen(3000, () => {
//    console.log("Server started ");
// });
const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.json("Hello World");
});
app.get("/hello", (req, res) => {
   res.json("World");
});
app.listen(3000, (err) => { 
   console.log("Server started");
})