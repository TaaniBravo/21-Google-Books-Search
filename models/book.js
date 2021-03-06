const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleBookId: String,
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: String,
  image: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
