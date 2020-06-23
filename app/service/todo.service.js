
const db = require('../models/index')

export class TodoService {
    constructor() {
        this.todoRepository = db.todo;
    }
    create = (todo) => {
        this.todoRepository.create(todo).then(
            data => todo = data,
            err => console.log(err));
        return todo;
    }
}
