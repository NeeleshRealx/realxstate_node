const express = require("express");
const app = express()

app.use((req,res)=>{
    res.send("realXstate is running")
})

app.listen("5555",()=>{
    console.log("server is running")
})