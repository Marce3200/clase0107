const express = require('express');
const connectDb = require('./config/db');
require("dotenv").config();

const routes = require("./routes");

const app= express ();
app.use(express.json());

app.use("/",routes);

connectDb();
app.listen(process.env.port, () =>{
    console.log(`listen in port ${process.env.PORT}`)
});

