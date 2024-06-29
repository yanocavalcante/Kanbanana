import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middlewares.js";

import { Router } from "express";

const userRouter = Router();

userRouter.post("/create", userController.createUserController);

userRouter.get("/findById/:id?", authMiddleware, validId, userController.findUserByIdController);
userRouter.patch("/update/:id", authMiddleware, validId, userController.updateUserController);

userRouter.get("/", authMiddleware, userController.findAllUserController);



export default userRouter;
