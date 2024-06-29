import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const parts = authHeader.split(" ");
        if (parts.length !== 2)
          return res.status(401).send({ message: "Invalid Token Parts" });
      
        const [scheme, token] = parts;
      
        if (!/^Bearer$/i.test(scheme))
          return res.status(401).send({ message: "Malformatted Token!" });
      
        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
          if (err) return res.status(401).send({ message: "Invalid Token Jwt" });
      
          const user = await userRepositories.findByIdUserRepository(decoded.id);
          if (!user || !user.id)
            return res.status(401).send({ message: "Invalid Token User" });
      
          req.userId = user.id;
          return next();
        })} catch (err) {
            return res.status(500).send({ message: err.message})
        }
        }
      export default authMiddleware;