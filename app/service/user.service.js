
const Model = require('../models/index.js');

class UserService {
    constructor() {
        const model = new Model();
        this.userRepository = model.model('user');
    }
    create = async (user) => {
        return await this.userRepository.create(user);
    }

    update = async (user) => {
        return await this.userRepository.update(user, {where: {id: user.id}});
    }

    getAll = async () => {
        return await this.userRepository.findAll();
    }

    remove = async (userId) => {
        return await this.userRepository.destroy({where: {id: userId}})
    }
}

module.exports = UserService;
