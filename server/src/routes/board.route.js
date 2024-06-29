import { Router } from "express";
import boardController from "../controllers/board.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middlewares.js";

const boardRouter = Router();

boardRouter.get("/", boardController.findAllBoardController);
boardRouter.get("/:id", boardController.findByIdBoardController);

boardRouter.use(authMiddleware);
boardRouter.post("/create", boardController.createBoardController);

boardRouter.use(validId);
boardRouter.patch("/update/:id", boardController.updateBoardController);

export default boardRouter;
