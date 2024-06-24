import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { findByIdService } from "../services/user.service.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).send({ message: "Unauthorized!" });
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.status(401).send({ message: "Unauthorized!" });
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Invalid Token" });
            }

            const user = await findByIdService(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({ message: "Invalid User" });
            }

            req.userId = user.id;

            return next();
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
