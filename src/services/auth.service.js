import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const loginService = (email) => User.findOne({ email: email }).select("+ password"); // ({campo: valor})

// Token parrra guardar a sessão do nosso usuário, sem expor seus dados
const generateToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 })

export { loginService, generateToken };
