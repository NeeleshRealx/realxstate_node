const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt")

const User = require("../model/User")
const Lawyers=require("../model/Lawyers.js");
const jwt= require("jsonwebtoken")

const app =express()
app.use(express.json());

userRouter.post("/login",async (req,res,next)=>{
    try{
        const data=req.body

        const user=await User.findOne({email:data.email})
        console.log(data,"data") // undefined
        console.log(user,"user") // undefined

        if (!user){
        console.log(user,"userIIf") // undefined

            res.status(404).send("User not found")
        }
        const passCheck= await bcrypt.compare(data.password,user.password,);

        if(passCheck){
            const token = await jwt.sign({_id:user.id},"RealX")
            res.cookie("token",token)
            res.send(token)
        }
        else{
            res.status(404).send("check your email or password")
        }

    }
    catch(err){
        console.log(err)
    }
    
})

userRouter.post("/signup",async (req,res,next)=>{
    try{
        console.log(req.body,"req.body")

        const role =req.body.role
        const allowedRoles = ["user","lawyer"]
        if(!allowedRoles.includes(req.body.role)){  
            res.status(404).send("Invalid Role")
        }
            
         const passwordHashing= await bcrypt.hash(req.body.password, 10);
        if(req.body.role==="user"){
        const newData = new User({
            name:req.body.name,
            email:req.body.email,
            password:passwordHashing,
            phone:req.body.phone,
            role:req.body.role
        })

        await newData.save()
        res.send("Saved user")
        }
        else if(req.body.role==="lawyer"){
             const newData = new Lawyers({
            name:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:passwordHashing,
            phone:req.body.phone,
            role:req.body.role,
            specialization:["civil","land"],
            experienceYears:req.body.experienceYears,
            barCouncilId:req.body.barCouncilId,
            address:req.body.address,
            fee:req.body.fee
        })

        await newData.save()
        res.send("Saved user")
        }
        
        
    }
    catch(err){
        console.log(err)
    }
    
})

userRouter.post("/logout",async (req,res,next)=>{
    try{
        console.log(req.body,"req.body")
        res.cookie ("token",null,{
            expires: new Date(Date.now()),
        })      
        
    }
    catch(err){
        console.log(err)
    }
    
})

module.exports = {userRouter};