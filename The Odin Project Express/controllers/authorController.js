const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAllAuthors(req, res){
    const authors = await db.getAllAuthors();

    if (!authors) {
       throw new CustomNotFoundError("Error fetching authors");
    }

    res.json(authors);

}

async function getAuthorById(req, res) {
 
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
       throw new CustomNotFoundError("Author not found");
    }

    res.send(`Author Name: ${author.name}`);
  
}

module.exports = { getAuthorById, getAllAuthors };
