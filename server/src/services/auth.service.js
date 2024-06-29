import bcrypt from "bcrypt";
import userRepositories from "../repositories/user.repositories.js";
import authRepositories from "../repositories/auth.repositories.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id) => {
    return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
};

const loginService = async (email, password) => {
    const user = await authRepositories.loginRepository(email);
    if (!user) throw new Error("Wrong password or username");
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = generateToken(user.id);

    return token;
};

export default { loginService, generateToken };
