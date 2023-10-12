const express = require('express');
const app = express();
const port = 4000; // Set your desired port number
const cors = require("cors")
const apiData = require('./data.json')

app.use(cors())

app.get("/",(req,res)=>{
res.send('I am Live')
})

app.get("/products",(req,res)=>{
    res.send(apiData)
})

app.listen(port,()=>{
    console.log("I am Live Again");
})