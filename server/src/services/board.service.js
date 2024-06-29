import boardRepositories from "../repositories/board.repositories.js";

const createBoardService = async ({ name }, userId) => {
    const name = name;
    if (!name) throw new Error("Submit all fields for registration");

    const { id } = await boardRepositories.createBoardRepository(name, userId);

    return {
        message: "Board created successfully!",
        board: { id, name },
    };
};

const findAllService = async (offset, limit) => {
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
        limit = 5;
    }

    if (!offset) {
        offset = 0;
    }

    const boards = await boardRepositories.findAllBoardRepository(
        offset,
        limit
    );

    const total = await boardRepositories.countBoardRepository();

    const next = offset + limit;
    const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
        previous != null
            ? `${currentUrl}?limit=${limit}&offset=${previous}`
            : null;

    boards.shift();

    return {
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,

        results: boards.map((board) => ({
            id: board._id,
            name: board.name,
            username: board.user.username,
            avatar: board.user.avatar,
        })),
    };
};

const findByIdService = async (id) => {
    const board = await boardRepositories.findBoardByIdRepository(id);

    if (!board) throw new Error("Board not found");

    return {
        id: board._id,
        name: board.name,
        username: board.user.username,
        avatar: board.user.avatar,
    };
};

const updateService = async (id, name) => {
    if (!name) throw new Error("Submit at least one field to update the board");

    const board = await boardRepositories.findBoardByIdRepository(id);

    if (!board) throw new Error("Board not found");

    if (board.user._id != userId)
        throw new Error("You didn't create this Board");

    await boardRepositories.updateBoardRepository(id, name);
};

export default {
    createBoardService,
    findAllService,
    findByIdService,
    updateService,
};
