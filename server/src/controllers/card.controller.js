const Card = require('../models/card.model');



const createCardController = async (req, res) => {
    try {
        // Extrai os dados do corpo da requisição
        const { title, description } = req.body;

        // Cria um novo card com os dados fornecidos
        const newCard = new Card({
            title,
            description,
        });

        // Salva o card no banco de dados
        await newCard.save();

        // Retorna o card criado como resposta
        res.status(201).json(newCard);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        res.status(500).json({ error: 'Failed to create card' });
    }
};

// Método para obter todos os cards
const getAllCards = async (req, res) => {
    try {
        // Obtém todos os cards do banco de dados
        const cards = await Card.find();

        // Retorna os cards como resposta
        res.json(cards);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        res.status(500).json({ error: 'Failed to get cards' });
    }
};

// Método para obter um card específico
const getCardById = async (req, res) => {
    try {
        // Obtém o ID do card a partir dos parâmetros da URL
        const { id } = req.params;

        // Procura o card no banco de dados pelo ID
        const card = await Card.findById(id);

        // Verifica se o card foi encontrado
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        // Retorna o card como resposta
        res.json(card);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        res.status(500).json({ error: 'Failed to get card' });
    }
};

// Método para atualizar um card
const updateCardController = async (req, res) => {
    try {
        // Obtém o ID do card a partir dos parâmetros da URL
        const { id } = req.params;

        // Extrai os dados do corpo da requisição
        const { title, description } = req.body;

        // Procura o card no banco de dados pelo ID
        const card = await Card.findByIdAndUpdate(id, { title, description }, { new: true });


        // Verifica se o card foi encontrado
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        // Atualiza os dados do card
        card.title = title;
        card.description = description;

        // Salva as alterações no banco de dados
        await card.save();

        // Retorna o card atualizado como resposta
        res.json(card);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        res.status(500).json({ error: 'Failed to update card' });
    }
};

// Método para excluir um card
const deleteCardController = async (req, res) => {
    try {
        // Obtém o ID do card a partir dos parâmetros da URL
        const { id } = req.params;

        // Procura o card no banco de dados pelo ID
        const card = await Card.findById(id);

        // Verifica se o card foi encontrado
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        // Remove o card do banco de dados
        await card.remove();

        // Retorna uma resposta de sucesso
        res.json({ message: 'Card deleted' });
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro
        res.status(500).json({ error: 'Failed to delete card' });
    }
};

export default {
    createCardController,
    getAllCards,
    getCardById,
    updateCardController,
    deleteCardController,
};