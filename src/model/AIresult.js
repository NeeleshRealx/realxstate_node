const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  "documentId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document' // Reference to the Document model
  },
  "userId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  },
  "status":{
    type:String,
    enum:{
        values: ["pending" , "completed","failed"],
      message: '{VALUE} is not supported'
        },
    },

  "extractedText": String,
  "aiSummary": String,           // human readable
  "landStatus":{
    type:String,
    enum:{
        values: ["good" , "disputed" , "loan","police_case"],
      message: '{VALUE} is not supported'
        },
    },
  "issuesFound": [
    {
      "type":{
    type:String,
    enum:{
        values: ["loan" , "case" , "illegal_mortgage"],
      message: '{VALUE} is not supported'
        },
    },
      "details": String
    }
  ],
  "metadata": {
    "surveyNumber": String,
    "village": String,
    "taluk": String,
    "district": String,
    "ownerName": String,
    "extent": String,
    "encumbrances": Array
  },
  "createdAt": Date,
  "updatedAt": Date
},{
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
const Airesult = mongoose.model('Airesult', schema);
module.exports = Airesult;