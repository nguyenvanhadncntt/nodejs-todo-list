const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

class Server {
    constructor() {
        this.configResponseJson();
        this.configViewEngine();
        this.initDB();
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

    initDB() {
        const db = require('./app/models/index.js');
        db.sequelize.sync();
    }

    startServer() {
        app.listen(3090);
    }

    homePage() {
        app.get('/', (req, res) => {
            res.render('index');
        });
    }
}

new Server();