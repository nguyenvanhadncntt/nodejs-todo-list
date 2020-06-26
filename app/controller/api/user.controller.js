const TodoService = require('../../service/todo.service.js');

class UserController {
    constructor() {
        this.userService = new TodoService();
    }

    async getUserList(req, res) {
        const data = await this.userService.getAll();
        res.status(200).json(data);
    }

    async createUser(req, res) {
        const todo = await this.userService.create(req.body);
        res.status(201).json(todo);
    }

    async updateUser(req, res) {
        const todo = await this.userService.update(req.body)
        res.status(200).json(todo);
    }

    async removeUser(req, res) {
        const data =  this.userService.remove(req.params.id);
        res.status(200).json(data);
    }
}

module.exports = UserController;