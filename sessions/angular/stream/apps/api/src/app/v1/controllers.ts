import { Router } from "express";
import { router as usersController } from "./users/users.controller";
import { router as workshopsController } from "./workshops/workshops.controller";

const router = Router();

router.use("/users", usersController);
router.use("/workshops", workshopsController);

export { router };
