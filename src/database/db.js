import mongoose from 'mongoose';


const connectDataBase = () => {
    console.log("Estabelecendo conexão com o banco de dados...");

    mongoose.connect(process.env.MONGODB_URI ,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("MongoDB Atlas conectado!"))
        .catch((error) => console.log("Erro ao conectar com o MongoDB Atlas: " + error));
}

export default connectDataBase;