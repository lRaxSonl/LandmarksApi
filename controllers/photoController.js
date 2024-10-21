const { Photo, Landmark } = require('../config/createdb');

const addPhoto = async (req, res) => {
    const { imageUrl, description } = req.body;
    const landmarkId = req.params.landmarkId;
    const userId = req.user.id;
    
    try {
        const landmark = await Landmark.findByPk(landmarkId);
        if (!landmark) {
            return res.status(404).json({ error: 'Достопримечательность не найдена' });
        }

        const photo = await Photo.create({ imageUrl, description, landmarkId, userId });
        res.status(201).json(photo);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при добавлении фотографии', details: error.message });
    }
};

const getAllPhotos = async (req, res) => {
    const landmarkId = req.params.landmarkId;

    try {
        const photos = await Photo.findAll({ where: { landmarkId } });
        res.json(photos);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении фотографий', details: error.message });
    }
};

const deletePhoto = async (req, res) => {
    const { id } = req.params;

    try {
        const photo = await Photo.findByPk(id);
        if (!photo) {
            return res.status(404).json({ error: 'Фото не найдено' });
        }

        await photo.destroy();
        res.json({ message: 'Фото успешно удалено' });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при удалении фото', details: error.message });
    }
};

module.exports = {
    addPhoto,
    getAllPhotos,
    deletePhoto
};
