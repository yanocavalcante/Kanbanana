import express from 'express';
import connectDataBase from './src/database/db.js';
import userRoute from './src/routes/user.route.js';

const app = express()

const port = 3000

connectDataBase();
app.use(express.json()); // mandar dados json para nossa api
app.use("/user", userRoute);
    
// ROTA
    // Method HTTP - CRUD (Create, Read, Update, Delete)
        //  GET - pegar informações
        //  POST - criar informações
        //  PUT - alterar todas as informações
        // PATCH - alterar algumas informações
        // DELETE - deletar informações

    // Name - Um indentificador da Rota

    // Function (Callback) - Responsavel por executar um comando
// app.get('/soma', (req, res) => {
//     const result = 100 + 1;
//     const soma = 2 +2 ;
//     res.send({result : result})
// });
app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`))