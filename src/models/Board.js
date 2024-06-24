import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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

const Board = mongoose.model("Board", BoardSchema);


export default Board;