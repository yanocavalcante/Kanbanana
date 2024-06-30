import Card from "../models/Card.js";

function createCardRepository(title, userId) {
    return Card.create({ title, user: userId });
}

function findAllCardRepository(offset, limit) {
    return Card.find()
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit)
        .populate("user"); // Ajuste conforme necessário
}

function findCardByIdRepository(id) {
    return Card.findById(id).populate("user"); // Ajuste conforme necessário
}

function countCardRepository() {
    return Card.countDocuments();
}

function findCardsByUserIdRepository(id) {
    return Card.find({ user: id }).sort({ _id: -1 }).populate("user"); // Ajuste conforme necessário
}

function updateCardRepository(id, title) {
    return Card.findOneAndUpdate({ _id: id }, { title }, { rawResult: true });
}

function deleteCardRepository(id) {
    return Card.findOneAndDelete({ _id: id });
}

export default {
    createCardRepository,
    findAllCardRepository,
    findCardByIdRepository,
    countCardRepository,
    findCardsByUserIdRepository,
    updateCardRepository,
    deleteCardRepository,
};