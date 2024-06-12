import express from 'express';
import connectDataBase from './src/database/db.js';
import dotenv from 'dotenv';

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';


dotenv.config();

const app = express()
const port = process.env.PORT || 3000 //Porta que o servidor disponibiliza OU a porta 3000

connectDataBase();
app.use(express.json()); // mandar dados json para nossa api
app.use("/user", userRoute);
app.use("/auth", authRoute);


app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`))