var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose')
var {MongoClient} = require('mongodb')

var passport = require('passport')

var flash = require('connect-flash')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var session = require('express-session')

var routes = require('./routes');

var app = express();
var port = 8000;



var configDB = require('./config/database.js')
mongoose.connect(configDB.url)

app.use(morgan('dev')); //log every request
app.use(cookieParser()); //to read cookies
app.use(bodyParser()); //to get information from forms


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/*
app.use(session({sercet:'ilovemyselfmyselfmyselfmyself'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
*/
app.use(express.static(path.join(__dirname, 'public')));







app.use('/', routes());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

app.listen(port ,() => {
  console.log(`Listening at ${port}`)
})

module.exports = app;
