import mongoose from 'mongoose';// Importação do mongoose para uso do MongoDB

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        required : true
    },
    background : {
        type : String,
        required : true
    }
});

const User = mongoose.model('User', UserSchema);

export default User;// Esquema  (schema) do usuário (UserSchema) e modelo (model) do usuário (User) exportados para uso em outros arquivos