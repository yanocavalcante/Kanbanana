import Board from "../models/Board.js";

const createService = (body) => Board.create(body);

const findAllService = (offset, limit) =>
    Board.find().sort({ _id: -1 }).skip(offset).limit(limit);

const countBoards = () => Board.countDocuments();

const findByIdService = (id) => Board.findById(id);

const updateService = (id, body) => Board.findByIdAndUpdate(id, body, { new: true });

const deleteBoardService = async (boardId) => {
    const board = await Board.findByIdAndDelete(boardId);
    if (!board) throw new Error("Board not found");
    return board;
}

export { createService, findAllService, countBoards, findByIdService, updateService, deleteBoardService};

