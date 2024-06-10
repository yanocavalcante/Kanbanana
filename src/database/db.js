const mongoose = require('mongoose');

const connectDataBase = () => {
    console.log("Estabelecendo conexão com o banco de dados...");

    mongoose.connect("mongodb+srv://layonjroliveira:hBhVTVTi8DBMAOrD@cluster0.xwmiktn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then( ()=> console.log("MongoDB Atlas conectado!"))
    .catch( (error) => console.log("Erro ao conectar com o MongoDB Atlas: " + error));
}

module.exports = connectDataBase;