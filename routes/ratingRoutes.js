const { 
    createRating, 
    getAllRatings, 
    updateRating, 
    deleteRating, 
    addPhoto, 
    getAllPhotos, 
    deletePhoto 
} = require('../controllers/ratingController');
const { authenticateToken } = require('../middlewares/middleware');


module.exports = function(app) {
    //Создание рейтинга для достопримечательности
    app.post('/api/landmarks/:landmarkId/ratings', authenticateToken, createRating);

    //Получение всех рейтингов для достопримечательности
    app.get('/api/landmarks/:landmarkId/ratings', getAllRatings);

    //Обновление рейтинга по ID
    app.put('/api/ratings/:id', authenticateToken, updateRating);

    //Удаление рейтинга по ID
    app.delete('/api/ratings/:id', authenticateToken, deleteRating);

    //Добавление фотографии к достопримечательности
    app.post('/api/landmarks/:landmarkId/photos', authenticateToken, addPhoto);

    //Получение всех фотографий для достопримечательности
    app.get('/api/landmarks/:landmarkId/photos', getAllPhotos);

    //Удаление фотографии по ID
    app.delete('/api/photos/:id', authenticateToken, deletePhoto);
};
