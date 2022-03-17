const express = require('express');
const router = express.Router();
var flash = require('connect-flash')


/* GET home page. */
module.exports = () => {
  router.get('/', function(req, res, next) {
    res.render('layout',
    {
     template:'login',
     title: 'login',
     message:req.flash('loginMessage')
    })
  });
  router.get('/signup', function(req,res,next) {
    res.render('layout',{template:'signup',title: 'signup',
     message: req.flash('signupMessage')})
  })


  router.get('/profile', isLoggedIn, function(req,res) {
    res.render('layout',{template:'profile',title: 'profile',
        user:req.user})
  });

  router.get('/logout', function(req,res) {
    req.logout();
    res.redirect('/')
  })

    return router
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticaed())
    return next()

  res.redirect()
}
