const { DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Session = sequelize.define(
    'Session',
    {
    email:{
        type: DataTypes.STRING,
        validate:{
            isEmail:true
        },
        allowNull: false,
        unique: true
    },
    otp:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{

    tableName: 'sessions',
    timestamps: false

})

module.exports = Session