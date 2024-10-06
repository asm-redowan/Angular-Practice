const { DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Company = sequelize.define(
    'Company',
    {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
    },
    package: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'companys', 
    timestamps: false
    // createdAt: false,
    // updatedAt: 'update_time'
})

module.exports = Company