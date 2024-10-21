const { Rating, Photo } = require('../config/createdb');

//Создание нового рейтинга для достопримечательности
const createRating = async (req, res) => {
    const { landmarkId, score, userId } = req.body;

    try {
        const rating = await Rating.create({ landmarkId, score, userId });
        res.status(201).json(rating);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при создании рейтинга', details: error.message });
    }
};

//Получение всех рейтингов для достопримечательности
const getAllRatings = async (req, res) => {
    const { landmarkId } = req.params;

    try {
        const ratings = await Rating.findAll({ where: { landmarkId } });
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении рейтингов', details: error.message });
    }
};

//Обновление рейтинга
const updateRating = async (req, res) => {
    const { id } = req.params;

    try {
        const rating = await Rating.findByPk(id);
        if (!rating) return res.status(404).json({ error: 'Рейтинг не найден' });

        const { score } = req.body;
        await rating.update({ score });
        res.json({ message: 'Рейтинг обновлён', rating });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при обновлении рейтинга' });
    }
};

//Удаление рейтинга
const deleteRating = async (req, res) => {
    const { id } = req.params;

    try {
        const rating = await Rating.findByPk(id);
        if (!rating) return res.status(404).json({ error: 'Рейтинг не найден' });

        await rating.destroy();
        res.json({ message: 'Рейтинг удалён' });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при удалении рейтинга' });
    }
};

//Добавление фотографии к достопримечательности
const addPhoto = async (req, res) => {
    const { landmarkId, imageUrl, description, userId } = req.body;

    try {
        const photo = await Photo.create({ landmarkId, imageUrl, description, userId });
        res.status(201).json(photo);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при добавлении фотографии', details: error.message });
    }
};

//Получение всех фотографий для достопримечательности
const getAllPhotos = async (req, res) => {
    const { landmarkId } = req.params;

    try {
        const photos = await Photo.findAll({ where: { landmarkId } });
        res.json(photos);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении фотографий', details: error.message });
    }
};

// Удаление фотографии
const deletePhoto = async (req, res) => {
    const { id } = req.params;

    try {
        const photo = await Photo.findByPk(id);
        if (!photo) return res.status(404).json({ error: 'Фотография не найдена' });

        await photo.destroy();
        res.json({ message: 'Фотография удалена' });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при удалении фотографии' });
    }
};

module.exports = {
    createRating,
    getAllRatings,
    updateRating,
    deleteRating,
    addPhoto,
    getAllPhotos,
    deletePhoto,
};
