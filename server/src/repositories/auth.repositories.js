import User from "../models/User.js";

const loginRepository = (email) => {
    return User.findOne({ email: email }).select("+password");
};

export default { loginRepository }
