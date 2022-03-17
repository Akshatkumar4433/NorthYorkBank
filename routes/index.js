const express = require('express');
const router = express.Router();
const login = require('./login')
const profile = require('./profile')

/* GET home page. */
module.exports = () => {
  router.get('/',login);
  //router.get('/profile', profile)
  return router
}
