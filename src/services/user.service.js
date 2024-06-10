    const User = require('../models/User');
    
    const createService = (body) => User.create(body) // o create é um método do mongoose que cria um novo documento no banco de dados

    const findAllService = () => User.find() // o find é um método do mongoose que retorna todos os documentos de uma coleção no banco de dados

    const findByIdService = (id) => User.findById(id) // o findById é um método do mongoose que retorna um documento de uma coleção no banco de dados com base no id

    const updateService = (
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
        ) => User.findOneAndUpdate({_id: id }, { name, username, email, password, avatar, background })

    module.exports = {
        createService,
        findAllService,
        findByIdService,
        updateService
    }