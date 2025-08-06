const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

async function getAllBooks(req, res){
    const books = await db.getAllBooks();

    if(!books){
        throw new CustomNotFoundError("Error fetching books")
    }

    res.json(books)
}

async function getBookById(req, res){
    const {bookId} = req.params;

    const book = await db.getBookById(Number(bookId));

    if(!book){
        throw new CustomNotFoundError("Book not found");
    }

    res.send(`Book title: ${book.title}`)
}

module.exports = {getBookById, getAllBooks};