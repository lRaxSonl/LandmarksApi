const { Sequelize } = require('sequelize');
const db = require('../config/database');
const User = require('./user');
const Landmark = require('./landmark');


const Rating = db.define("Rating", {
    type: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    }
});

module.exports = Rating;