var mongoose = require('mongoose');



var userSchema = mongoose.Schema({
      local : {
          email        : String,
          password     : String,
          creditScore  : String,
          debitAmount  : String,
          creditAmount:  String,
          creditCardNumber: String,
          debitCardNumber: String,
      },
})
require("./methods.js")(userSchema);

module.exports = mongoose.model('User', userSchema);
