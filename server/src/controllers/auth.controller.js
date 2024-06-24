import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.service.js";


const login = async (req, res) => {
    const { email, password } = req.body; // Recebendo os dados de email e senha do corpo da requisição
    
    try{
        const user = await loginService(email); // Buscando o usuário no banco de dados (simulando um banco de dados
        if (!user){
            return res.status(401).send("Usuário ou Senha inválidos");
        };

        const isPasswordIsValid = bcrypt.compareSync(password, user.password); // o Compare Sync poderia ser substituído pelo compare, porém utilizariámos o await
        if (!isPasswordIsValid){
            return res.status(401).send("Usuário ou Senha inválidos");
        };

        const token = generateToken(user._id);
        res.send({token});

    }catch (err){
        return res.status(500).send(err.message);
    }

};

export { login }; // Exportando o método login para ser utilizado em outros arquivos

