const UserService = require('../services/user.service');


const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;
    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json({"message": "Submit all fields for resgistration"})
    }

    const user = await UserService.create(req.body);

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
}

module.exports = {
    create
}