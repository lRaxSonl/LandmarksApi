const { Landmark, Rating, Photo } = require('../config/createdb');

const createLandmark = async (req, res) => {
    const { name, description, location, country, imageUrl } = req.body;
    try {
        const landmark = await Landmark.create({ name, description, location, country, imageUrl });
        res.status(201).json(landmark);
    } catch (error) {
        res.status(500).json({ error: 'Error creating landmark' });
    }
};

const getAllLandmarks = async (req, res) => {
    try {
        const landmarks = await Landmark.findAll({
            include: [
                {
                    model: Photo,
                    as: 'photos',
                    attributes: ['id', 'imageUrl', 'description', 'userId']
                },
                {
                    model: Rating,
                    as: 'ratings',
                    attributes: ['id', 'type', 'userId']
                }
            ]
        });
        res.json(landmarks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching landmarks', details: error.message });
    }
};

const updateLandmark = async (req, res) => {
    try {
        const landmark = await Landmark.findByPk(req.params.id);
        if (!landmark) return res.status(404).json({ error: 'Landmark not found' });

        const { name, description, location, country, imageUrl } = req.body;
        await landmark.update({ name, description, location, country, imageUrl });
        res.json({ message: 'Landmark updated', landmark });
    } catch (error) {
        res.status(500).json({ error: 'Error updating landmark' });
    }
};

const deleteLandmark = async (req, res) => {
    try {
        const landmark = await Landmark.findByPk(req.params.id);
        if (!landmark) return res.status(404).json({ error: 'Landmark not found' });

        await landmark.destroy();
        res.json({ message: 'Landmark deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting landmark' });
    }
};

module.exports = {
    createLandmark,
    getAllLandmarks,
    updateLandmark,
    deleteLandmark
};
