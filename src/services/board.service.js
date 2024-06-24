import Board from "../models/Board.js";


const createService = (body) => Board.create(body);

const findAllService = () => Board.find();

export default { createService, findAllService }