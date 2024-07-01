import { Router } from "express";
import boardController from "../controllers/board.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middlewares.js";

const boardRouter = Router();

boardRouter.get("/", boardController.findAllBoardController);
boardRouter.get("/:id", boardController.findBoardByIdBoardController);

boardRouter.use(authMiddleware);
boardRouter.post("/create", boardController.createBoardController);

boardRouter.use(validId);
boardRouter.patch("/update/:id", boardController.updateBoardController);
boardRouter.patch("/update/:id/addUser", boardController.addUserBoardController);
boardRouter.delete("/delete/:id", boardController.deleteBoardController)

export default boardRouter;