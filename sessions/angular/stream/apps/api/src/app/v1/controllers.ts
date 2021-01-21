import { Router } from "express";
import { router as usersController } from "./users/users.controller";

const router = Router();

router.use("/users", usersController);

export { router };
