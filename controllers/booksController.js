const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async (req, res) => {
    try {
      const dbModel = await db.Book.find({});
      res.json(dbModel);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  findById: async (req, res) => {
    try {
      const dbModel = await db.Book.findById(req.params.id);
      res.json(dbModel);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  remove: async (req, res) => {
    try {
      const dbModel = db.Book.findById({ _id: req.params.id });
      res.json(dbModel.remove());
    } catch (error) {
      res.status(422).json(err);
    }
  }
};
