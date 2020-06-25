
const Model = require('../models/index.js');

class TodoService {
    constructor() {
        const model = new Model();
        this.todoRepository = model.model('todo');
    }
    create = async (todo) => {
        return await this.todoRepository.create(todo);
    }

    update = async (todo) => {
        return await this.todoRepository.update(todo, {where: {id: todo.id}});
    }

    getAll = async () => {
        return await this.todoRepository.findAll();
    }

    remove = async (todoId) => {
        return await this.todoRepository.destroy({where: {id: todoId}})
    }
}

module.exports = TodoService;
