module.exports = function registerClassRoutes(app) {
   const classes = ["MCA", "BCA"];
   app.route("/classes")
      .get((req, res) => {
         res.json(classes);
      })
      .post((req, res) => {
         classes.push(req.body.class);
         res.json(classes);
      });

   app.route("/classes/:id")
      .get((req, res) => {
         res.json(classes.find(c => c === req.params.id) || "No Match Found");
      })
      .delete((req, res, next) => {
         const index = classes.findIndex(c => c === req.params.id);
         if (index >= 0) {
            classes.splice(index, 1);
         }
         res.json(classes);
      })
}