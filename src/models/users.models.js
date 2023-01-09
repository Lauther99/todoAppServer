// conexion para la bd

const { DataTypes } = require('sequelize')
const db = require('../utils/db.js')

//destructuramos los datos de sequelize
//se refiere a traducir los datos de postgre a lenguaje js por medio de sequelize
//si en postgres es varchar, en el codigo seria string y así. Para mas informacion mirar: https://sequelize.org/docs/v7/other-topics/other-data-types/

// definir el modelo de usuarios
// los modelos se definen con una Mayuscula

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }    
})

// lo exportamos

module.exports = Users;

