const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Company = require('./companyModel');
const Group = require('./groupModel');

const User = sequelize.define(
    'User',
    {
        name:{
           type: DataTypes.STRING,
           isAlpha: true,
           allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            validate:{
                isEmail:true
            },
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        company_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Company,
                key: 'id'
            },
            allowNull: false
        },
        group_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Group,
                key: 'id'
            },
            allowNull: false
        }

    }, {

    tableName: 'users',
    timestamps: false

    }
)

module.exports = User