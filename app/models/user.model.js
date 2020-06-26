module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        username: {
            type: DataTypes.STRING
        },
        fullname: {
            type: DataTypes.STRING
        },
        birthdate: {
            type: DataTypes.DATE
        },
        password: {
            type: DataTypes.STRING
        },
    },
    {
        freezeTableName: true,
        tableName: 'user'
    });

    return user;
}