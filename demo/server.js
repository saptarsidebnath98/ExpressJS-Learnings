
import express from "express";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import path from "path";
import posts from "./routes/posts.js"
import { fileURLToPath } from "url";
const port = process.env.PORT || 8000;


//Get current directory name (ES6)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Logger middleware
app.use(logger);


// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get('/',(req, res)=> {
    //     res.sendFile(path.join(__dirname,'public', 'index.html'))
    // });
    
    // app.get('/about',(req, res)=> {
        //     res.sendFile(path.join(__dirname,'public', 'about.html'))
        // })
        
// Routes
app.use("/api/posts", posts);


// ErrorHandler middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`));
