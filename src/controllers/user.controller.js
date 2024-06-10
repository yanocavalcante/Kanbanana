const userService = require('../services/user.service');
const mongoose = require('mongoose');


const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;
    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json({"message": "Submit all fields for resgistration"})
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).json({"message": "Error to create user"})
    }

    res.status(201).json({
        message: "User created successfully!",
        user: {
            id : user._id,
            name,
            username,
            email,
            avatar,
            background
        },
    })
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (!users) {
        return res.status(404).json({"message": "Users not found"})
    }

    res.status(200).json(users)
}

const findById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({"message": "Invalid ID"})
    }

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(404).json({"message": "User not found"})
    }

    res.status(200).json(user)
}

module.exports = {
    create,
    findAll,
    findById
}