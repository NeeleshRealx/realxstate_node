const mongoose = require("mongoose");
const connectDb = async ()=>{
    await mongoose.connect('mongodb+srv://neeleshnithish_db_user:XvQkcFOtQAuecZ6r@realxstate.z1nqmin.mongodb.net/RealXstate?appName=Realxstate');
}

module.exports = connectDb