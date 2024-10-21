const { registerUser, loginUser, getUserInfo } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/middleware');


module.exports = function(app){
    //Регистрация пользователя
    app.post('/api/register', registerUser);

    //Авторизация пользователя
    app.post('/api/login', loginUser);

    //Получение информации о пользователе
    app.get('/api/user/:id', authenticateToken, getUserInfo);

}
