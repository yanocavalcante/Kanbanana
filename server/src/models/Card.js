import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    column: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Card = mongoose.model("Card", CardSchema);

export default Card;