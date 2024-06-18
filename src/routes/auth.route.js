import { Router } from "express"; // Importando o Router do express
const router = Router(); // Instanciando o Router


import { login } from "../controllers/auth.controller.js"; // Importando o controller de autenticação
router.post("/", login); //autenticação é feita por meio do POST

export default router; // Exportando o router para ser utilizado em outros arquivos