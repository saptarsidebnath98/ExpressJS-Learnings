const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const path = require("node:path");

//static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});


const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
