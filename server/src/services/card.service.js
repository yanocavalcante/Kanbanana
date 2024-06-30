import cardRepositories from "../repositories/card.repositories.js";

const createService = async ({ title, description }, userId) => {
    if (!title || !description) throw new Error("Submit all fields for registration");
    const { id } = await cardRepositories.createCardRepository(title, description, userId);
    return {
        message: "Card created successfully!",
        card: { id, title, description },
    };
};

const findAllService = async (limit, offset, currentUrl) => {
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
        limit = 5;
    }

    if (!offset) {
        offset = 0;
    }

    const cards = await cardRepositories.findAllCardRepository(offset, limit);
    const total = await cardRepositories.countCardRepository();
    const next = offset + limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    return {
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: cards.map((card) => ({
            id: card._id,
            title: card.title,
            description: card.description,
            username: card.user.username,
            avatar: card.user.avatar,
        })),
    };
};

const findByIdService = async (id) => {
    const card = await cardRepositories.findCardByIdRepository(id);

    if (!card) throw new Error("Card not found");

    return {
        id: card._id,
        title: card.title,
        description: card.description,
        username: card.user.username,
        avatar: card.user.avatar,
    };
};

const updateService = async (id, { title, description }, userId) => {
    if (!title && !description) throw new Error("Submit at least one field to update the card");

    const card = await cardRepositories.findCardByIdRepository(id);
    if (!card) throw new Error("Card not found");

    if (card.user._id != userId) throw new Error("You didn't create this Card");
    await cardRepositories.updateCardRepository(id, { title, description });
};

const deleteService = async (id, userId) => {
    const card = await cardRepositories.findCardByIdRepository(id);
    if (!card) throw new Error("Card not found");

    if (card.user._id != userId) throw new Error("You didn't create this Card");

    await cardRepositories.deleteCardRepository(id);
};

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
    deleteService,
};