const mongoose = require('mongoose');
const userService = require('../services/user.service');

const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({"message": "Invalid ID"})
    }
    req.id = id;

    next();
};

const validUser = async (req, res, next) => {
    const id = req.id;

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(404).json({"message": "User not found"})
    }

    req.id = id;
    req.user = user;

    next();
};

module.exports = {
    validId,
    validUser
}