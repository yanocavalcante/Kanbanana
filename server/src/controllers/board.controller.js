import e from "express";
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
        const board = await boardService.createService(
            {
                name,
            },
            userId
        );
        res.status(201).send(board);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAllBoardController = async (req, res) => {
    const { limit, offset } = req.query;
    const currentUrl = req.baseUrl;

    try {
        const boards = await boardService.findAllService(
            limit,
            offset,
            currentUrl
        );
        if (req.cond == true) {
            return res.send(boards);
        }else{
            return boards;
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
};
const findAllBoardsUserController = async (req, res) => {
    req.cond = false;
    const userId = req.userId;
    try {
        const boards = await findAllBoardController(req, res);
        let boardsUser = [];

        for (let board of boards.results) {
            for (let user of board.users) {
                if (user._id == userId) {
                    boardsUser.push(board);
                }
            }
        }
        return res.send(boardsUser);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const findBoardByIdBoardController = async (req, res) => {
    const { id } = req.params;
    try {
        const board = await boardService.findByIdService(id);
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
        await boardService.updateService(id, name, userId);

        return res.send({ message: "Board successfully updated!" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

const deleteBoardController = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;

    try {
        await boardService.deleteService(id, userId);
        return res.send({ message: "Board deleted successfully" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

const addUserInBoardController = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;

    try {
        await boardService.addUserInBoardService(id, email);
        return res.send({ message: "User added to board" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export default {
    createBoardController,
    findAllBoardController,
    findAllBoardsUserController,
    findBoardByIdBoardController,
    updateBoardController,
    deleteBoardController,
    addUserInBoardController,
};
