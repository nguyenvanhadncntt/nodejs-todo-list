const TodoController = require('../app/controller/api/todo.controller');
const express = require('express');
const router = express.Router();

class RouterApi {
    todoController = new TodoController();
    constructor() {
        router.get('/', (req, res) => this.todoController.getTodoList(req, res));
        router.post('/', (req, res) => this.todoController.createTodo(req, res));
        router.put('/', (req, res) => this.todoController.updateTodo(req, res));
        router.delete('/:id', (req, res) => this.todoController.removeTodo(req, res));
    }

    getRouter() {
        return router;
    }
}

module.exports = RouterApi;