const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
      type: String,
      required: true, // Title is a required field
    },
    author: {
      type: String,
      required: true, // Author is a required field
    },
    summary: {
      type: String,
      required: true, // Summary is a required field
    },
});

const Book = mongoose.model('Book', schema);

module.exports.Book;

