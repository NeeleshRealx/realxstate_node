const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  "surveyNumber": String,
  "village": String,
  "taluk": String,
  "district": String,
  "ownerName": String,
  "propertyType": String,
  "encumbrances": Array,
  "lastVerified": Date,
  "aiConfidence": Number
},{
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
const Landrecords = mongoose.model('Landrecords', schema);
module.exports = Landrecords;