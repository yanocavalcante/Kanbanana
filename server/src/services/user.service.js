import User from "../models/User.js";

const createService = (body) => User.create(body);
const findAllService = () => User.find();
const findByIdService = (id) => User.findById(id);
const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar    
) =>
    User.findOneAndUpdate(
        { _id: id },
        { name, username, email, password, avatar }
    );

const findUserByIdService = async (userIdParam, userIdLogged) => {
    let idParam;
    if (!userIdParam) {
        userIdParam = userIdLogged;
        idParam = userIdParam;
    } else {
        idParam = userIdParam
    }
    if (!idParam)
        throw new Error("Send an id in the parameters to search for the user");

    const user = await User.findById(idParam)

    if (!user) throw new Error("User not found");

    return user;
}


export {
    createService,
    findAllService,
    findByIdService,
    updateService,
    findUserByIdService
};
