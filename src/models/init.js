const Categories = require('./categories.models');
const Tasks = require('./tasks.models');
const TaskCategories = require('./tasks_categories.models');
const Users = require('./users.models')

const initModels = () => {
    Tasks.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
    Users.hasMany(Tasks, {as: 'tasks', foreignKey: 'user_id'});

    TaskCategories.belongsTo(Tasks, {as: 'task', foreignKey: 'task_id'});
    Tasks.hasMany(TaskCategories, {as: 'category', foreignKey: 'task_id'});

    TaskCategories.belongsTo(Categories, {as: 'category', foreignKey: 'categories_id'});
    Categories.hasMany(TaskCategories, {as: 'task', foreignKey: 'categories_id'});

}

module.exports = initModels;
