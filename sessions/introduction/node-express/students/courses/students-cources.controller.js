const Router = require("express").Router;
const studentCoursesRouter = Router({
   mergeParams: true
});
studentCoursesRouter.get("/", () => { });
studentCoursesRouter.get("/:courseId", () => { });
studentCoursesRouter.get("/:courseId/subjects", () => { });


module.exports = studentCoursesRouter;