import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
        select: false
    },
    avatar : {
        type : String,
        required : true
    },
    boards : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Board'
    }]
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model('User', UserSchema); 

export default User;