const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

// Matches with "/api/books"
// prettier-ignore
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
