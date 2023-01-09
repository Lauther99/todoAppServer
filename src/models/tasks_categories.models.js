const db = require('../utils/db.js')
const { DataTypes } = require('sequelize')

const TaskCategories = db.define('task_categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'task_id',
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categories_id',
    },
},
    {
        timestamps: false,
    })
module.exports = TaskCategories;