const express = require('express')
const app = express()
const connectDataBase = require("./src/database/db")

const userRoute = require('./src/routes/user.route')
const port = 3000

connectDataBase();
app.use(express.json());
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