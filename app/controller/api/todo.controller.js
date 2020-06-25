const TodoService = require('../../service/todo.service.js');

class TodoController {
    constructor() {
        this.todoService = new TodoService();
        this.createTodo.bind(this);
    }

    async getTodoList(req, res) {
        const data = await this.todoService.getAll();
        res.status(200).json(data);
    }

    async createTodo(req, res) {
        const todo = await this.todoService.create(req.body);
        res.status(201).json(todo);
    }

    async updateTodo(req, res) {
        const todo = await this.todoService.update(req.body)
        res.status(200).json(todo);
    }

    async removeTodo(req, res) {
        const data = await this.todoService.remove(req.params.id);
        res.status(200).json(data);
    }
}

module.exports = TodoController;