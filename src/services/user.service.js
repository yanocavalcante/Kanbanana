    const User = require('../models/User');
    
    const create = (body) => User.create(body) // o create é um método do mongoose que cria um novo documento no banco de dados

    module.exports = {
        create,
    }