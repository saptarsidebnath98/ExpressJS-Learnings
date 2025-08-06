const {Router} = require('express');
const { getBookById, getAllBooks } = require('../controllers/bookController');


const bookRouter = Router();

bookRouter.get('/', getAllBooks);

bookRouter.get('/:bookId', getBookById);

bookRouter.get('/google', (req, res) => {
    res.redirect('https://www.google.com/')
})
module.exports = bookRouter;