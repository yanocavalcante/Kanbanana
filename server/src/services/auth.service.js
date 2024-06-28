import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/user.repositories.js";
import jwt from 'jsonwebtoken';

const loginService = async (email, password) => {
    const user = await userRepositories.findByEmailUserRepository(email);

    if (!user) throw new Error("Wrong password or username");


    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error("Invalid password");
  
    const token = generateToken(user.id);
  
    return token;
}

const generateToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 })

export { loginService, generateToken };
