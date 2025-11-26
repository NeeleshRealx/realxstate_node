const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  "userId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model

  },
  "query": String,
  "timestamp": Date
},{
    timestamps: true,
});
const Searchhistory = mongoose.model('Searchhistory', schema);
module.exports = Searchhistory;