const Consumption = require('../models/consumption.model');

const getConsumption = async (req, res) => {
    try {
        const cons = await Consumption.findOne({
            where: {id: req.body.id},
            attributes: {
                exclude: ['id']
            },
        });
        if (!price) {
            res.status(404).json({ success: false, message: "Consumption could not be found." })
        } else {
            res.status(200).json({ success: true, data: cons.dataValues });
        }
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};

const createConsumption = async (req, res) => {
    try {
        const cons = await Consumption.create(req.body);
        res.status(201).json({success: true, data: cons.dataValues});
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};

const deleteConsumption = async (req, res) => {
    try {
        await Consumption.destroy({where: {id: req.body.id}});
        res.status(200).json({success: true, message: "Consumption deleted successfully."});
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};

const controllers = {
    getConsumption,
    createConsumption,
    deleteConsumption,
}

module.exports = controllers;