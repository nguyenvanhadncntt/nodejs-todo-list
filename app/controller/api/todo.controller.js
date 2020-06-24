const TodoService = require('../../service/todo.service.js');

class TodoController {
    constructor() {
        this.todoService = new TodoService();
        this.createTodo.bind(this);
    }

    getTodoList(req, res) {
        this.todoService.getAll().then(data => {
            res.status(200).json(data);
        });
    }

    createTodo(req, res) {
        this.todoService.create(req.body)
        .then(data => {
            res.status(201).json(data);
        });
    }

    updateTodo(req, res) {
        this.todoService.update(req.body)
        .then(data => {
            res.status(200).json(data);
        });
    }

    removeTodo(req, res) {
        this.todoService.remove(req.params.id)
        .then(data => {
            res.status(200).json(data);
        });
    }
}

module.exports = TodoController;