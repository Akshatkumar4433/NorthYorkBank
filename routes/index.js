var express = require('express');
var router = express.Router();
var login = require('./login')

/* GET home page. */
router.get('/',login);

module.exports = router;
