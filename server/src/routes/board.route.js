import { Router } from "express";
import { create, findAll, findById, update } from "../controllers/board.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/:id", authMiddleware, findById);
router.put("/:id", authMiddleware, update);

export default router;
