import { createService, findAllService } from "../services/board.service.js";

const create = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).send({
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
