import express from 'express';
import { get } from 'http';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url); // get the name of the file
const __dirname = path.dirname(__filename); // get the name of the directory


// define a static files directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'));
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