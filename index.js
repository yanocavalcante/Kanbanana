const express = require('express')
const app = express()

// ROTA
    // Method HTTP - CRUD (Create, Read, Update, Delete)
        //  GET - pegar informações
        //  POST - criar informações
        //  PUT - alterar todas as informações
        // PATCH - alterar algumas informações
        // DELETE - deletar informações

    // Name - Um indentificador da Rota

    // Function (Callback) - Responsavel por executar um comando
app.get('/soma', (req, res) => {
    const result = 100 + 1;
    const soma = 2 +2 ;
    res.send({result : result})
});

app.listen(3000);