//Time to build solid database
var bcrypt = require('bcrypt-nodejs');

const {faker} = require('@faker-js/faker');
const mongoose = require('mongoose');
//const userModel = require('../app/models/user')
mongoose.connect('mongodb://localhost:27017/text_present');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', () => {
  console.log("Connection SuccessFul!")
})


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
require("../app/models/methods")(userSchema);

let userModel = mongoose.model('User', userSchema)

/*
for(let i = 0; i<20; i++) {
  let email = faker.internet.email()
  let password = faker.internet.password()
  let creditScore = faker.random.number({min: 300, max:800})
  let debitAmount = faker.finance.amount(1000,45000 , 1)
  let creditAmount = faker.finance.amount(100, 5000, 1)
  let creditCardNumber = faker.finance.creditCardNumber('48[7-9]#-####-####-###L')
  let debitCardNumber = faker.finance.creditCardNumber('48[7-9]#-####-####-###L')
  console.log(email, password, creditScore, debitAmount, creditCardNumber)
}
*/

let email = faker.internet.email()
let password = faker.internet.password()
console.log(password)
password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
let creditScore = faker.random.number({min: 300, max:800})
let debitAmount = faker.finance.amount(1000,45000 , 1)
let creditAmount = faker.finance.amount(100, 5000, 1)
let creditCardNumber = faker.finance.creditCardNumber('48[7-9]#-####-####-###L')
let debitCardNumber = faker.finance.creditCardNumber('48[7-9]#-####-####-###L')


console.log({email, password, creditScore, debitAmount, creditAmount,creditCardNumber, debitCardNumber})
let char = new userModel({local:{email:email,password:password, creditScore:creditScore, debitAmount:debitAmount, creditAmount: creditAmount,creditCardNumber: creditCardNumber, debitCardNumber:debitCardNumber}})
char.save(function(err, user)  {
  if (err) return console.error(err)
  console.log(user.email)
});
