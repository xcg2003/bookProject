import express from 'express';
import { get } from 'http';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})