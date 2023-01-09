//PARA CONECTAR A UNA BASE DE DATOS

const {Sequelize} = require('sequelize');

// crear una instancia con parametros de configuración de nuestra bd
// creamos un objeto de configuracion con las credenciales de la bd
const db = new Sequelize({
    database: 'todoapp2',
    username: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'root',
    dialect: 'postgres' //que tipo de base de datos es (mysql, postgress, mariadb)
});

//la exportamos para ejecutarla en mi otro archivo
module.exports = db;


