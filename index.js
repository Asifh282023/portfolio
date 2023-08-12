const express = require('express');
const cors =require("cors");
const path =require("path");
const router =require('./router/routes.js')
const app =express();


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,"build")))
app.use("/api",router);

app.listen(8080);