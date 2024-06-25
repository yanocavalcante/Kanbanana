import {
    createService,
    findAllService,
    findByIdService,
    updateService,
} from "../services/user.service.js";

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar } =
            req.body;
        if (
            !name ||
            !username ||
            !email ||
            !password ||
            !avatar
        ) {
            res.status(400).json({
                message: "Submit all fields for registration",
            });
        }

        const user = await createService(req.body);

        if (!user) {
            return res.status(400).json({ message: "Error while creating user" });
        }

        res.status(201).json({
            message: "User created successfully!",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const users = await findAllService();

        if (!users) {
            return res.status(404).json({ message: "No users registered" });
        }

        res.status(200).json(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findById = async (req, res) => {
    try {
        const user = req.user;

        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar } =
            req.body;

        if (
            !name &&
            !username &&
            !email &&
            !password &&
            !avatar
        ) {
            res.status(400).json({
                message: "Submit at least one field for update",
            });
        }

        const { id, user } = req;

        await updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
        );

        res.status(200).json({ message: "User updated successfully!" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export default { create, findAll, findById, update };
