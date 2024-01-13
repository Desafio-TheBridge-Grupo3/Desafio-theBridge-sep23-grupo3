const Price = require('../models/price.model');

const getPrice = async (req, res) => {
    try {
        const price = await Price.findOne({
            where: {id: req.body.id},
            attributes: {
                exclude: ['id']
            },
        });
        if (!price) {
            res.status(404).json({ success: false, message: "Price could not be found." })
        } else {
            res.status(200).json({ success: true, data: price.dataValues });
        }
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    };
};

const createPrice = async (req, res) => {
    try {
        const price = await Price.create(req.body);
        res.status(201).json({success: true, data: price.dataValues});
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};

const deletePrice = async (req, res) => {
    try {
        await Price.destroy({where: {id: req.body.id}});
        res.status(200).json({success: true, message: "Price deleted successfully."});
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};

const controllers = {
    getPrice,
    createPrice,
    deletePrice,
}

module.exports = controllers;