const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conncted Succesfully to MongoDB ATLAS!");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hello Islam");
})


app.listen(5000, () => {
    console.log("Server Started Succesfully on Port 5000");
})