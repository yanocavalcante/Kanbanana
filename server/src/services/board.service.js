import boardRepositories from "../repositories/board.repositories.js";
import userRepositories from "../repositories/user.repositories.js";

const createService = async ({ name }, userId) => {
    if (!name) throw new Error("Submit all fields for registration");
    const {id} = boardRepositories.createBoardRepository(name, userId);
    return {
        message: "Board created successfully!",
        board: { name },
    };
};

const findAllService = async (limit, offset, currentUrl) => {
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
        limit = 100;
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

    // boards.shift();
    return {
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,

        results: boards.map((board) => ({
            id: board._id,
            name: board.name,
            owner: board.users[0].username,
        })),
    };
};

const findByIdService = async (id) => {
    const board = await boardRepositories.findBoardByIdRepository(id);
    if (!board) throw new Error("Board not found");

    return {
        id: board._id,
        name: board.name,
        username: board.users.username,
        avatar: board.users.avatar,
    };
};

const updateService = async (id, name, userId) => {
    if (!name) throw new Error("Submit at least one field to update the board");

    const board = await boardRepositories.findBoardByIdRepository(id);
    if (!board) throw new Error("Board not found");

    await boardRepositories.updateBoardRepository(id, name);
};

const deleteService = async (id, userId) => {
    const board = await boardRepositories.findBoardByIdRepository(id);
    if (!board) throw new Error("Board not found");

    if (board.users[0]._id != userId) throw new Error("You didn't create this Board");

    await boardRepositories.deleteBoardRepository(id);
};

const addUserInBoardService = async (id, email) => {
    const board = await boardRepositories.findBoardByIdRepository(id);
    if (!board) throw new Error("Board not found");
    const user = await userRepositories.findByEmailUserRepository(email);
    if (!user) throw new Error("User not found");

    await boardRepositories.addUserInBoardRepository(id, user._id);
};

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
    deleteService,
    addUserInBoardService,
};
