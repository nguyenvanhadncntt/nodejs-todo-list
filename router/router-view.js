class RouterView {
    constructor(app) {
        this.app = app;
        this.createTodoRouterView();
        this.createUserRouterView();
    }

    createUserRouterView() {
        this.app.get('/users', (req, res) => {
            res.render('user');
        });
    }

    createTodoRouterView() {
        this.app.get('/todos', (req, res) => {
            res.render('todo');
        });
    }
}

module.exports = RouterView;