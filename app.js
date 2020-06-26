const RouterApi = require('./router/router-api');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const Model = require('./app/models/index.js');
const RouterView = require('./router/router-view');

class Server {
    constructor() {
        this.configResponseJson();
        this.configViewEngine();
        this.initDB();
        this.configRouterApi();
        this.configRouterView();
        this.homePage();
        this.startServer();
    }

    configResponseJson() {
        const corsOption = {
            origin: '*'
        };
        app.use(cors(corsOption));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
    }

    configViewEngine() {
        app.use(express.static(path.join(__dirname, 'public')));
        app.set('views', path.join(__dirname, 'public/templates/pages'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
    }

    configRouterApi() {
        this.routerApi = new RouterApi();
        app.use('/api', this.routerApi.getRouter());
    }

    configRouterView() {
        this.routerView = new RouterView(app);
    }

    initDB() {
        const model = new Model();
        model.db.sequelize.sync();
    }

    startServer() {
        app.listen(3000);
    }

    homePage() {
        app.get('/', (req, res) => {
            res.render('index');
        });
    }
}

new Server();