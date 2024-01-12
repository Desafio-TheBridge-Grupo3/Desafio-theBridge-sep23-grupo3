const CIA_pow_several = require("../models/ciaConSeveral.model");

const getCiaPowSeveral = async (req, res) => {
  try {
    if (req.body.id) {
      const cia = await CIA_pow_several.findOne({
        where: { id: req.body.id },
        attributes: {
          exclude: ["id"],
        },
      });
      if (!cia) {
        res.status(404).json({
          success: false,
          message: `CIA pow Several with id ${req.body.id} could not be found`,
        });
      } else {
        res.status(200).json({ success: true, data: cia.dataValues });
      }
    } else {
      const cia = await CIA_pow_several.findAll();
      const data = cia.map((c) => c.dataValues);
      res.status(200).json({ success: true, count: data.length, data: data });
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const getAllCiaPowSeveral = async (req, res) => {
  try {
    let cia = await CIA_pow_several.findAll();
    cia = cia.map(c => c.dataValues);
    res.status(200).json({ success: true, data: cia});
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const createCiaPowSeveral = async (req, res) => {
  try {
    const cia = await CIA_pow_several.create(req.body);
    res.status(201).json({ success: true, data: cia.dataValues });
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const updateCiaPowSeveral = async (req, res) => {
  try {
    await CIA_pow_several.update(
        {
            cia: req.body.cia,
            zone: req.body.zone,
            rate: req.body.rate,
            product_cia: req.body.product_cia,
            market: req.body.market,
            pow_price_P1: req.body.pow_price_P1,
            pow_price_P2: req.body.pow_price_P2,
            pow_price_P3: req.body.pow_price_P3,
            pow_price_P4: req.body.pow_price_P4,
            pow_price_P5: req.body.pow_price_P5,
            pow_price_P6: req.body.pow_price_P6,
        },
        { where: { id: req.body.id } }
    );
    res.status(200).json({ success: true, message: 'CIA pow Several register updated successfully.' });
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const deleteCiaPowSeveral = async (req, res) => {
  try {
    await CIA_pow_several.destroy({ where: { id: req.body.id } });
    res.status(200).json({
      success: true,
      message: "CIA pow Several register deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const controllers = {
    getCiaPowSeveral,
    getAllCiaPowSeveral,
    createCiaPowSeveral,
    updateCiaPowSeveral,
    deleteCiaPowSeveral,
};

module.exports = controllers;
