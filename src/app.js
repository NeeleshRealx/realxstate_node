require("dotenv").config()
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/databaseConfig");
const cookieParser = require('cookie-parser')
const {profileRouter} = require("./routes/profileRouter");
const {userRouter}=require("./routes/userRouter")

const app = express()
// Configure CORS
const corsOptions = {
  origin: ['http://3.105.82.55',"http://localhost:5173"], 
 credentials: true
};

app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions));

app.use("/",userRouter)
app.use("/",profileRouter)


connectDb().then(()=>{
    console.log("db connected successfully")
    app.listen(process.env.PORT_NUM,()=>{
        console.log("server is running")
    })
}).catch((err)=>{
    console.log(err)
})



