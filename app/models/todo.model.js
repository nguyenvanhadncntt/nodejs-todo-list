module.exports = (sequelize, Sequelize) => {
    const todo = sequelize.define('todo', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    },
    {
        freezeTableName: true,
        tableName: 'todo'
    });
    return todo;
}