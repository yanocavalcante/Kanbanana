import express from "express";
import connectDataBase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import boardRoute from "./src/routes/board.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDataBase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/board", boardRoute);


app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`));
