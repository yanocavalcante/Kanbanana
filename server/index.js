import express from "express";
import connectDataBase from "./src/database/db.js";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import boardRoute from "./src/routes/board.route.js";
import swaggerRoute from "./src/routes/swagger.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

connectDataBase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/board", boardRoute);
app.use("/docs", swaggerRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
