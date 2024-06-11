import express from 'express';
import connectDataBase from './src/database/db.js';
import userRoute from './src/routes/user.route.js';

const app = express()
const port = 3000

connectDataBase();
app.use(express.json()); // mandar dados json para nossa api
app.use("/user", userRoute);


app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`))