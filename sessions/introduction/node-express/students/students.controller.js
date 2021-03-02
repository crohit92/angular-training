const Router = require("express").Router;
const studentCoursesRouter = require("./courses/students-cources.controller");
const studentsRouter = Router({
   mergeParams: true
});
studentsRouter.get("/", () => { });
studentsRouter.get("/:id", () => { });
studentsRouter.use("/:id/courses", studentCoursesRouter);
module.exports = studentsRouter;
