const express = require("express");
const app = express();
const films = require('./src/data/films.json')

app.get('/films', (req,res) => {
    return res.json(films)
})

app.listen(3000, () => {
    console.log("up in http://localhost:3000/films")
})