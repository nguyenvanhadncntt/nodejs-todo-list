const dbConfig = require('../../config/db.config.js');
const Sequelize = require('sequelize');
class Model {
    db = {};

    constructor() {
        this.initSequelize();
        this.createModel();
    }

    initSequelize() {
        this.sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
            host: dbConfig.HOST,
            dialect: dbConfig.dialect,
            operatorsAliases: false,
            pool: {
                max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle
            }
        });
        this.db.Sequelize = Sequelize;
        this.db.sequelize = this.sequelize;
    }

    createModel() {
        const user = require('./user.model.js')(this.sequelize, Sequelize);
        const todo = require('./todo.model.js')(this.sequelize, Sequelize);
        todo.belongsTo(user);
        user.hasMany(todo);
        this.db.todo = todo;
        this.db.user = user;
    }

    model(modelName) {
        return this.db[modelName];
    }
}

module.exports = Model;