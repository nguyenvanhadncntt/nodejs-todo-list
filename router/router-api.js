const express = require('express');
const router = express.Router();
const TodoController = require('../app/controller/api/todo.controller');
const UserController = require('../app/controller/api/user.controller');

class RouterApi {
    todoController = new TodoController();
    userController = new UserController
    constructor() {
        this.createTodoRouter();
        this.createUserRouter();
    }

    createTodoRouter() {
        router.get('/todos', (req, res) => this.todoController.getTodoList(req, res));
        router.post('/todos', (req, res) => this.todoController.createTodo(req, res));
        router.put('/todos', (req, res) => this.todoController.updateTodo(req, res));
        router.delete('/todos/:id', (req, res) => this.todoController.removeTodo(req, res));
    }

    createUserRouter() {
        router.get('/users', (req, res) => this.userController.getUserList(req, res));
        router.post('/users', (req, res) => this.userController.createUser(req, res));
        router.put('/users', (req, res) => this.userController.updateUser(req, res));
        router.delete('/users/:id', (req, res) => this.userController.removeUser(req, res));
    }

    getRouter() {
        return router;
    }
}

module.exports = RouterApi;