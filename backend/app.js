const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")

dotenv.config()

const eventsRoute = require('./routes/events')

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connected to Mongo!")
    })
    .catch((err)=>{
        console.log( err)
    })


app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-request-with, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
    next();
})


app.use("/api/events", eventsRoute);

app.use((req, res, next)=>{
    res.send('nada')
})

module.exports = app;