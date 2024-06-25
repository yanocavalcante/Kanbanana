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
    columnToDo: {
        type: Array,
        required: true,
    },
    columnDoing: {
        type: Array,
        required: true,
    },
    columnDone: {
        type: Array,
        required: true,
    },
});

const Board = mongoose.model("Board", BoardSchema);


export default Board;