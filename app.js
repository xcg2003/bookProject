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
    res.render("home");
});

app.post("/", (req,res) =>{
    const data = req.body;
    const password = process.env.HOME_PASSWORD;
    const username = process.env.HOME_USERNAME;
    if(username != data.username && username != data.password)
    {
        console.log("Incorrect Username and password");
    }
    else if(password != data.password){
        console.log("Incorrect password");
    }
    else if(username != data.username){
        console.log("Incorrect username");
    }
    else{
        console.log("Correct Creds");
    }
});

app.get("/homepage", (req, res) => {
    res.send("home page here, user can search through there database of books");
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