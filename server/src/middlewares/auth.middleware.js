import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers.authorization;

        if (!authorization) {
            return res.status(401).send({ message: "Unauthorized!" });
        }

        const parts = authHeader.split(" ");
        if (parts.length !== 2)
          return res.status(401).send({ message: "Invalid token!" });
      
        const [scheme, token] = parts;
      
        if (!/^Bearer$/i.test(scheme))
          return res.status(401).send({ message: "Malformatted Token!" });
      
        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
          if (err) return res.status(401).send({ message: "Invalid token!" });
      
          const user = await userRepositories.findByIdUserRepository(decoded.id);
          if (!user || !user.id)
            return res.status(401).send({ message: "Invalid token!" });
      
          req.userId = user.id;
      
          return next();
        })} catch (err) {
            return res.status(500).send({ message: err.message})
        }
        }
      export default authMiddleware;