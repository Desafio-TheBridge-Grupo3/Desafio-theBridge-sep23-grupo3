const Total = require("../models/total.model");
const Consumption = require("../models/consumption.model");
const CIA_Client = require("../models/ciaClient.model");
const Price = require("../models/price.model");

CIA_Client.hasOne(Price, { foreignKey: "id" });
Consumption.hasOne(CIA_Client, { foreignKey: "id" });
Total.hasOne(Consumption, { foreignKey: "id" });

const getTotal = async (req, res) => {
  try {
    let total = await Total.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ["id", "id_consumption"],
      },
      include: [
        {
          model: Consumption,
          required: true,
          attributes: {
            exclude: ["id"],
          },
        },
      ],
    });
    if (!total) {
      res
        .status(404)
        .json({ success: false, message: "Total could not be found." });
    } else {
      total = total.dataValues;
      total.Consumption = total.Consumption.dataValues;
      const client = await CIA_Client.findOne({
        where: { id: total.Consumption.id_cia_client },
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
      delete total.Consumption.id_cia_client;
      total.CIA_Client = client.dataValues;
      total.CIA_Client.Price = total.CIA_Client.Price.dataValues;
      res.status(200).json({ success: true, data: total });
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const createTotal = async (req, res) => {
  try {
    const price = await Price.create(req.body.price);
    let clientData = req.body.client;
    clientData.id_price = price.dataValues.id;
    const client = await CIA_Client.create(clientData);
    let consData = req.body.consumption;
    consData.id_cia_client = client.dataValues.id;
    const cons = await Consumption.create(consData);
    let totalData = req.body.total;
    totalData.id_consumption = cons.dataValues.id;
    const total = await Total.create(totalData);
    res.status(201).json({success: true, total: total.dataValues});
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const deleteTotal = async (req, res) => {
  try {
    const total = await Total.findOne({where: {id: req.body.id}});
    if (!total) {
        res.status(404).json({success: false, message: `Total with id ${req.body.id} does not exist.`})
    } else {
        const cons = await Consumption.findOne({where: {id: total.dataValues.id_consumption}});
        const client = await CIA_Client.findOne({where: {id: cons.dataValues.id_cia_client}});
        await Price.destroy({where: {id: client.dataValues.id_price}});
        await client.destroy();
        await cons.destroy();
        await total.destroy();
        res
          .status(200)
          .json({ success: true, message: "Total register deleted successfully." });
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const controllers = {
  getTotal,
  createTotal,
  deleteTotal,
};

module.exports = controllers;
