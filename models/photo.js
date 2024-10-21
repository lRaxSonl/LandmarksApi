const { Sequelize } = require('sequelize');
const db = require('../config/database');
const User = require('./user');
const Landmark = require('./landmark');


const Photo = db.define('Photo', {
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    landmarkId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Landmark,
            key: 'id'
        }
    }
});

module.exports = Photo;
