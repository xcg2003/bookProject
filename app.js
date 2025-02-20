import express from 'express';
import { get } from 'http';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/homepage", (req, res) => {
    res.send("home page here, user can search through there database of books");
})

app.get("/bookMark", (req, res) => {
    res.send("display users book marks here");
})

app.get("/bookSearch", (req, res) => {
    res.send("user will search books on this page using googlebooks API");
})


app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})