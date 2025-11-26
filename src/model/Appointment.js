const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  "userId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  },
  "lawyerId": {
   type: mongoose.Schema.Types.ObjectId,
    ref: 'Lawyers' // Reference to the
  },
  "date": Date,
  "status":{
    type:String,
    enum:{
        values: ["pending" , "confirmed" , "completed","cancelled"],
      message: '{VALUE} is not supported'
        },
    },
  "issueDescription": String,
  "createdAt": Date
},{
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
const Appointment = mongoose.model('Appointment', schema);
module.exports = Appointment;