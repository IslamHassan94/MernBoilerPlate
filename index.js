const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const config = require("./config/key");
const {User} = require("./models/user");

const app = express();

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Conncted Succesfully to MongoDB ATLAS!");
}).catch((err) => {
    console.log(err);
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({"Hello ~": "Hi ~"});
})

app.post("/api/users/register", (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if (err) {
            return res.json({
                success: false,
                err
            });
        } else {
            return res.status(200).json({
                success: true
            });
        }
    });

})
app.listen(5000, () => {
    console.log("Server Started Succesfully on Port 5000");
})