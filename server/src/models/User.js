import mongoose from 'mongoose';// Importação do mongoose para uso do MongoDB
import bcrypt from 'bcrypt';// Importação do bcrypt para criptografia de senha do usuário

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
        required : true,
        select: false // quando o usuário for buscado, o campo password não será retornado no DB
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

UserSchema.pre("save", async function (next) { //Antes de salavar o schema, fazer algo
    this.password = await bcrypt.hash(this.password, 10); // Faz 10 saltos (rodadas) de criptografia na senha utilizadno hash
    next();
})

const User = mongoose.model('User', UserSchema); 

export default User;