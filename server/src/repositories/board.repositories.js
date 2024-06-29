import Board from "../models/Board.js";

function createBoardRepository(name, userId) {
    return Board.create({ name, user: userId });
}

function findAllBoardRepository(offset, limit) {
    return Board.find()
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit)
        .populate("user");
}

function findBoardByIdRepository(id) {
    return Board.findById(id).populate("user");
}

function countBoardRepository() {
    return Board.countDocuments();
}

function findBoardsByUserIdRepository(id) {
    return Board.find({ user: id }).sort({ _id: -1 }).populate("user");
}

function updateBoardRepository(id, name) {
    return Board.findOneAndUpdate(
        {
            _id: id,
        },
        {
            name,
        },
        {
            rawResult: true,
        }
    );
}

export default {createBoardRepository,
findAllBoardRepository,
findBoardByIdRepository,
countBoardRepository, 
findBoardsByUserIdRepository,
updateBoardRepository,
};
