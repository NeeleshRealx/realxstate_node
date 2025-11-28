const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  "name": String,
  "email": {
    unique:true,
    required: true,
    type:String,
    },
  "password": {
    required: true,
    type:String,
    },
    
  "phone": String,
  // "role":{
  //   required: true,
  //   type:String,
  //   // validate(value){
  //   //     if(!["user" , "lawyer" , "admin"].includes(value)){
  //   //         throw new Error ("Role is not available")
  //   //     }
  //   // },
  //   enum:{
  //       values: ["user" , "lawyer" , "admin"],
  //     message: '{VALUE} is not supported'
  //       },
  //   },
  "role": {
    type: String,
  },

  "createdAt": Date,
  "updatedAt": Date
},{
    timestamps: true, 
});
const User = mongoose.model('User', schema);
module.exports = User;