import Board from "../models/Board.js";

const createService = (body) => Board.create(body);

const findAllService = (offset, limit) =>
    Board.find().sort({ _id: -1 }).skip(offset).limit(limit);

const countBoards = () => Board.countDocuments();

export { createService, findAllService, countBoards};
