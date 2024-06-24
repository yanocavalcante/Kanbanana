import { createService, findAllService } from "../services/board.service.js";

const create = async (req, res) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).send({ message: "Unauthorized!" });
        }

        const parts = authorization.split(" ");
        const [schema, token] = parts;

        if (parts.length !== 2) {
            return res.status(401).send({ message: "Unauthorized!" });
        }

        const { name } = req.body;
        if (!name) {
            return res.status(400).send({
                message: "Submit all fields for registration",
            });
        }
        await createService({
            name,
        });

        res.status(201).send({ message: "Board created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const boards = await findAllService();

        if (!boards) {
            return res.status(404).json({ message: "Boards not found" });
        }

        res.status(200).json(boards);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { create, findAll };
