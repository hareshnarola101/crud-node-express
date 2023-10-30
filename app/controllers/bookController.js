const Book = require('../models/Book'); // Import the Book model

// Controller methods for managing books
const createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    console.log(title,author,summary);
    
    if (!title && !author && !summary) {
        
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const newBook = new Book({ title, author, summary });
    const savedBook = await newBook.save();

    

    res.json({
        message: "Book created successfully!",
        data: savedBook
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({
        message: "List of all books",
        data: books
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({
        message: "details of a specific book",
        data: book
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    if(!req.body) {
        res.status(400).json({
            message: "Data to update can not be empty!"
        });
    }
    const { title, author, summary } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, summary },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }else {
        res.json({
            message: "Book updated successfully.",
            data: updatedBook});
    }
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
