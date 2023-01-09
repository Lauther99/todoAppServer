const express = require('express');
const app = express();
app.use(express.json())
const PORT = 8000;



const db = require('./utils/db');
//Probando la conexion a la base de datos
db.authenticate()
    .then(() => console.log('autenticacion exitosa'))
    .catch((error) => console.log(error));


const initModels = require('./models/init');
const Users = require('./models/users.models');
const Tasks = require('./models/tasks.models')

initModels();


db.sync({ alter: false })
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bienvenido al servidor estimado usuario' })
})

app.get("/users", async (req, res) => {
    try {
        const result = await Users.findAll();
        res.status(200).json(result)

    } catch (error) {
        console.log(error);
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.get("/users/username/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Users.findOne({where: {username}});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.post("/users", async(req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
})

app.put("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await Users.update(field, {where: {id}});
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

app.delete("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = Users.destroy({where: {id}})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

app.get("/todos", async (req, res) => {
    try {
        const result = await Tasks.findAll();
        res.status(200).json(result)

    } catch (error) {
        console.log(error);
    }
})

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Tasks.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.post("/todos", async(req, res) => {
    try {
        const user = req.body;
        const result = await Tasks.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
})

app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await Tasks.update(field, {where: {id}});
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = Tasks.destroy({where: {id}})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto', PORT);
})

