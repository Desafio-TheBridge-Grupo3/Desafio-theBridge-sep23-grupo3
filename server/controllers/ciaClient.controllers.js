const CIA_Client = require("../models/ciaClient.model");
const Price = require("../models/price.model");

const getCIAClient = async (req, res) => {
  try {
    let client = await CIA_Client.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ["id", "id_price"],
      },
      include: [
        {
          model: Price,
          required: true,
          attributes: {
            exclude: ["id"],
          },
        },
      ],
    });
    if (!client) {
      res
        .status(404)
        .json({ success: false, message: "CIA Client could not be found." });
    } else {
      client = client.dataValues;
      client.Price = client.Price.dataValues;
      res.status(200).json({ success: true, data: client });
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const createCIAClient = async (req, res) => {
  try {
    const price = await Price.create(req.body.price);
    let data = req.body.client;
    data.id_price = price.dataValues.id;
    const client = await CIA_Client.create(data);
    res.status(201).json({ success: true, data: client.dataValues });
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const deleteCIAClient = async (req, res) => {
  try {
    const client = await CIA_Client.findOne({ where: { id: req.body.id } });
    if (!client) {
        res.status(404).json({success: false, message: `CIA client with id ${req.body.id} does not exist.`})
    } else {
        await Price.destroy({ where: { id: client.dataValues.id_price } });
        await client.destroy();
        res
          .status(200)
          .json({ success: true, message: "CIA Client register deleted successfully." });
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const controllers = {
  getCIAClient,
  createCIAClient,
  deleteCIAClient,
};

module.exports = controllers;
