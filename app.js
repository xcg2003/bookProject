import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import dotenv  from 'dotenv'; // To use env variables
dotenv.config();
const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url); // get the name of the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/CSS')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("login");
});

app.post("/", (req,res) =>{
    const data = req.body;
    const password = process.env.HOME_PASSWORD;
    const username = process.env.HOME_USERNAME;
    if(username !== data.username || password !== data.password)
    {
        console.log("Incorrect Username or password");
        res.render("login", {error: true});
        return;
    }
    else{
        console.log("login Successful");
        res.redirect("/homepage");
    }
});

app.get("/homepage", (req, res) => {
    res.render("home");
});

app.get("/bookMark", (req, res) => {
    res.send("display users book marks here");
});

app.get("/bookSearch", (req, res) => {
    res.send("user will search books on this page using googlebooks API");
});


app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
});