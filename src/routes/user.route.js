const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.soma);
route.get("/teste", userController.subtrai)
route.get("/teste/teste", userController.multiplica)
route.get("/layzin-e-foda", userController.raiz)

module.exports = route;