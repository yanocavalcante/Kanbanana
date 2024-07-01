import User from "../models/User.js";

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const createUserRepository = ({
  name,
  username,
  email,
  password,
  avatar,
}) =>
  User.create({
    name,
    username,
    email,
    password,
    avatar,
  });

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

const updateUserRepository = (
  id,
  name,
  username,
  email,
  password,
  avatar,
) =>
  User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      name,
      username,
      email,
      password,
      avatar,
    },
    {
      rawResult: true,
    }
  );

export default {
  findByEmailUserRepository,
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  updateUserRepository,
};