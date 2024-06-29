import boardService from "../services/board.service.js";
const createBoardController = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.userId;

        if (!name) {
            return res.status(400).send({
                message: "Submit all fields for registration",
            });
        }
        const board = await boardService.createService({
            name: name,
            user: userId,
        });

        res.status(201).send(board);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAllBoardController = async (req, res) => {
    const { limit, offset } = req.query;
    const currentUrl = req.baseUrl;

    try {
        const boards = await boardService.findAllBoardService(
            limit,
            offset,
            currentUrl
        );
        return res.send(boards);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const findBoardByIdBoardController = async (req, res) => {
    const { id } = req.params;

    try {
        const board = await boardService.findBoardByIdService(id);
        return res.send(board);
    } catch (e) {
        res.status(404).send(e.message);
    }
};
const updateBoardController = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const userId = req.userId;

    try {
        await boardService.updateBoardService(id, name, userId);

        return res.send({ message: "Board successfully updated!" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export default {
    createBoardController,
    findAllBoardController,
    findBoardByIdBoardController,
    updateBoardController,
};
