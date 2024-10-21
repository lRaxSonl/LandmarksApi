const { addPhoto, getAllPhotos, deletePhoto } = require('../controllers/photoController');
const { authenticateToken } = require('../middlewares/middleware');

module.exports = function(app) {
    //Добавление фотографии к достопримечательности
    app.post('/api/landmarks/:landmarkId/photos', authenticateToken, addPhoto);

    //Получение всех фотографий для достопримечательности
    app.get('/api/landmarks/:landmarkId/photos', getAllPhotos);

    //Удаление фотографии по ID
    app.delete('/api/photos/:id', authenticateToken, deletePhoto);
};
