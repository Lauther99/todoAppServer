const db = require('../utils/db.js')
const { DataTypes } = require('sequelize');
const Users = require('./users.models.js');

const Tasks = db.define('tasks', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_completed',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        }
    }        
})

module.exports = Tasks;