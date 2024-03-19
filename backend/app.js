const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

var cors = require("cors");

const app = express();

app.use(cors());

const userRoutes = require("./routes/users");

app.use(bodyParser.json({ extended: false }));

app.use(userRoutes);

mongoose
  .connect(
    "mongodb+srv://sanasupraja2727:Sana123@cluster0.9mlfr3j.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
