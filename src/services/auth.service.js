import User from '../models/User.js';

const loginService = async (email) => User.findOne({ email: email }).select("+ password"); // ({campo: valor})

export { loginService };
