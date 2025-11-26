const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  "userId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  "documentName": String,
  "fileUrl": String,      
  "documentType":{
    type:String,
    enum:{
        values: ["EC" , "Patta" , "Chitta", "FMB"],
      message: '{VALUE} is not supported'
        },
    },      
  "uploadedAt": Date,
  "aiProcessed": Boolean,
  "aiResultId": ObjectId        // link to AI result
});
const Document = mongoose.model('Documents', schema);
module.exports = Document;