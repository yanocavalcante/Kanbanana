import {
    createService,
    findAllService,
    countBoards,
} from "../services/board.service.js";

const create = async (req, res) => {
    try {
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

export { create, findAll };
