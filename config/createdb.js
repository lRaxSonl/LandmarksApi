const database = require('./database');
const User = require('../models/user');
const Landmark = require('../models/landmark');
const Photo = require('../models/photo');
const Rating = require('../models/rating');


Photo.belongsTo(User, { as: 'user', foreignKey: 'userId' });
Photo.belongsTo(Landmark, { as: 'landmark', foreignKey: 'landmarkId' });

Rating.belongsTo(User, { as: 'user', foreignKey: 'userId' });
Rating.belongsTo(Landmark, { as: 'landmark', foreignKey: 'landmarkId' });

Landmark.hasMany(Photo, { as: 'photos', foreignKey: 'landmarkId' });
Landmark.hasMany(Rating, { as: 'ratings', foreignKey: 'landmarkId' });

User.hasMany(Photo, { as: 'photos', foreignKey: 'userId' });
User.hasMany(Rating, { as: 'ratings', foreignKey: 'userId' });


database.sync({ force: false }).then(() => {
    console.log('Database has synced');
}).catch(err => {
    console.error('error occured:', err);
});


module.exports = { User, Landmark, Photo, Rating };