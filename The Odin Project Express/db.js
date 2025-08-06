// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

async function getAllAuthors(){
    return authors;
}

const books = [
    {id: 1, title: "Deep Work"},
    {id: 2, title: "Rich Dad Poor Dad"},
    {id: 3, title: "The Power of Subconscious Mind"},
];

async function getAllBooks(){
    return books;
}

async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
}

module.exports = { getAuthorById, getAllAuthors, getBookById, getAllBooks };
