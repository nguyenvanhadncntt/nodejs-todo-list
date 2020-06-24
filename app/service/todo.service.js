
const Model = require('../models/index.js');

class TodoService {
    constructor() {
        const model = new Model();
        this.todoRepository = model.model('todo');
    }
    create = (todo) => {
        return new Promise ((resolve, reject) => {
            this.todoRepository.create(todo).then(
                data => {return resolve(data)})
                .catch(error => reject(error));
        })
    }

    update = (todo) => {
        return new Promise ((resolve, reject) => {
            this.todoRepository.update(todo, {where: {id: todo.id}}).then(
                data => {return resolve(data)})
                .catch(error => reject(error));
        })
    }

    getAll = () => {
        return new Promise ((resolve, reject) => {
            this.todoRepository.findAll()
            .then(data => {
                return resolve(data);
            })
            .catch(error => reject(error))
        })
    }

    remove = (todoId) => {
        return new Promise((resolve, reject) => {
            this.todoRepository.destroy({where: {id: todoId}})
                .then(data => {return resolve(data)})
                .catch(error => reject(error));
        })
    }
}

module.exports = TodoService;
