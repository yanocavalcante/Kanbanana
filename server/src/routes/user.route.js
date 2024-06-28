import { Router} from "express";
import userController from "../controllers/user.controller.js";    
import { validId, validUser } from "../middlewares/global.middlewares.js";


const router = Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findById);
router.put("/:id", validId, validUser, userController.update);
router.get("/findById/:id?", userController.findUserByIdController)


export default router;