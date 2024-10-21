
const { createLandmark, getAllLandmarks, updateLandmark, deleteLandmark } = require('../controllers/landmarkController');
const { authenticateToken } = require('../middlewares/middleware');

module.exports = function(app){
    //Создание достопримечательности
    app.post('/api/create/landmark', authenticateToken, createLandmark);

    //Получение всех достопримечательностей
    app.get('/api/landmarks', getAllLandmarks);

    //Редактирование достопримечательности
    app.put('/api/upd/landmark/:id', authenticateToken, updateLandmark);

    //Удаление достопримечательности
    app.delete('/api/delete/landmark/:id', authenticateToken, deleteLandmark);
}
