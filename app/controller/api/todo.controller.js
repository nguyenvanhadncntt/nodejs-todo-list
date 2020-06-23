import {TodoService} from '../../service/todo.service';

class TodoController {
    constructor() {
        this.todoService = new TodoService();
        this.createTodo.bind(this);
    }

    createTodo(req, res) {
        const todo = this.todoService.create(req.body);
        res.status(200).json(todo);
    }
}

module.exports = TodoController;