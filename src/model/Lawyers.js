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
  "specialization": [String],  
  "experienceYears": Number,
  "barCouncilId":  {
    unique:true,
    required: true,
    type:Number,
    },
  "address": String,
  "rating": Number,
  "reviews": [
    {
      "userId": {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      "stars": Number,
      "comment": String,
      "createdAt": Date
    }
  ],
  "fee": Number,
  "casesHandled": Number,
  "available": Boolean,
  "createdAt": Date
});
const Lawyers = mongoose.model('Lawyers', schema);
module.exports = Lawyers;