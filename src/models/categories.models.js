const db = require('../utils/db.js')
const { DataTypes } = require('sequelize')

const Categories = db.define('categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'task_id',
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'task_id',
    },

},
    {
        timestamps: false,
    })

module.exports = Categories;