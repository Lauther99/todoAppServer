const Tasks = require("../models/tasks.models")
const Users = require("../models/users.models")
const db = require("../utils/db")

const toDos = {
    users: [
        {
            username: 'Lauther',
            email: 'asd@gmail.com',
            password: 'asd'
        },
        {
            username: 'Lauther2',
            email: 'asd1@gmail.com',
            password: 'asd1'
        },
        {
            username: 'Lauther3',
            email: 'asd2@gmail.com',
            password: 'asd2'
        }
    ],
    tasks: [
        {
            title: 'Sacar la basura',
            description: 'sacar la basura todas las mañanas',
            userId: '1'
        },
        {
            title: 'Tarea 2',
            description: 'Descripcion Tarea 2',
            userId: '1'
        },
        {
            title: 'Sacar la basura',
            description: 'sacar la basura todas las mañanas',
            userId: '2'
        },
        {
            title: 'Dormir',
            userId: '3'
        }
    ],
    taskCategories: [

    ],
    categories: [

    ]
}

db.sync({ force: true })
    .then(() => {
        console.log('iniciando insertando info');
        toDos.users.forEach(user => {
            Users.create(user)
        });

        setTimeout(() => {
            toDos.tasks.forEach(task => Tasks.create(task))
        }, 2000)


    })
    .catch(error => console.log(error))

