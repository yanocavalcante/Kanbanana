import { Router } from "express";
import cardController from "../controllers/card.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middlewares.js";

const cardRouter = Router();

// Rotas para buscar cards
cardRouter.get("/", cardController.findAllCardController);
cardRouter.get("/:id", cardController.findCardByIdController);

// Middleware de autenticação para proteger as rotas seguintes
cardRouter.use(authMiddleware);

// Rota para criar um novo card
cardRouter.post("/create", cardController.createCardController);

// Middleware para validar o ID nas rotas de atualização e exclusão
cardRouter.use(validId);

// Rota para atualizar um card existente
cardRouter.patch("/update/:id", cardController.updateCardController);

// Rota para excluir um card
cardRouter.delete("/delete/:id", cardController.deleteCardController);

export default cardRouter;