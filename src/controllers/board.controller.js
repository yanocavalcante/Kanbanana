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
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = (req, res) => {
    const board = [];
    res.status(200).send(board);
};

export default { create, findAll };
