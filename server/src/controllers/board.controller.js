import {
    createService,
    findAllService,
    countBoards,
    findByIdService,
    updateService,
    deleteBoardService
} from "../services/board.service.js";

const create = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.userId

        if (!name) {
            return res.status(400).send({
                message: "Submit all fields for registration",
            });
        }
        await createService({
            name: name,
            user: userId,
        });

        res.status(201).send({ message: "Board created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0;
        }

        const boards = await findAllService(offset, limit);
        const total = await countBoards();
        const currentUrl = req.baseUrl;

        const next = offset + limit;
        const nextUrl =
            next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl =
            previous != null
                ? `${currentUrl}?limit=${limit}&offset=${previous}`
                : null;

        if (!boards) {
            return res.status(404).json({ message: "Boards not found" });
        }

        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: boards.map((Item) => ({
                id: Item._id,
                name: Item.name,
                columnToDo: Item.columnToDo,
                columnDoing: Item.columnDoing,
                columnDone: Item.columnDone,
                createdAt: Item.createdAt,
            })),
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findById = async (req, res) => {
    try {
        const board = await findByIdService(req.params.id);
        if (!board) {
            return res.status(404).send({ message: 'Board not found' });
        }
        res.send(board);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const board = await updateService(req.params.id, req.body);
        if (!board) {
            return res.status(404).send({ message: 'Board not found' });
        }
        res.send(board);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
const deleteBoard = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteService(id); // Chamar o serviço de delete
        res.status(200).send({ message: "Board deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export { create, findAll, findById, update, deleteBoard};
