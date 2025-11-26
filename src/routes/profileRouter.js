const express = require("express")
const cookieParser = require('cookie-parser')
const profileRouter = express.Router()
const {userAuth} = require("../middleware/userLogin")
const User = require("../model/User")


const app = express()
app.use(cookieParser())

profileRouter.get("/getData",userAuth,async (req,res,next)=>{
    try{
        const data=req.user
        console.log(data.email,"email")
        const user = await User.find({email:data.email})
        if (!user) {
            return res.status(404).send("User not found")
        }
        res.send(user)

    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})
    
module.exports= {profileRouter}

