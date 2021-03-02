// const ob = require("./value");

module.exports = function registerRoutes(app) {
   console.log("Here")
   app.get("/classes", (req, res) => {
      res.json("I changed the definition");
   })
}
// console.log(ob.val);