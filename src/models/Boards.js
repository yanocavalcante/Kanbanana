import mongoose from "mongoose";

const BoardsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    lists: {
        type: Array,
        required: true,
    },
});

const Boards = mongoose.model("Boards", BoardsSchema);


export default Boards;