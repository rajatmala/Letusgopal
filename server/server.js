const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
require("dotenv").config({ path: "./config/config.env" });

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());



const dbURL =  "mongodb://localhost:27017/mern-auth";
console.log(process.env.MONGODB_URI);

mongoose
    .connect(process.env.MONGODB_URI,
    { useUnifiedTopology:true, useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = 5000;


app.listen(port,()=>console.log(`Server up and running on port ${port}`));