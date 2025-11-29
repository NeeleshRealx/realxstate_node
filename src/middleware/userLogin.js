require("dotenv").config()
const cookieParser = require('cookie-parser')
const express=require("express")
const User = require("../model/User")
const jwt = require("jsonwebtoken")

const app =express()
app.use(cookieParser())

const userAuth =async(req,res,next)=>{

    const cookie = req.cookies
    if(cookie.token){
        console.log(cookie,"cookie")
        var decoded = jwt.verify(cookie.token, process.env.JWT_KEY);
        console.log(decoded,"decode") // bar
        const user = await User.findById({_id:decoded._id})
        req.user=user
        next()
    }
    else{
        res.send("Token not available")
    }

    console.log(cookie,"cookie")

}

module.exports={userAuth}