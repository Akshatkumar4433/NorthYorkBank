var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('layout', {template:'login', title: 'login'})
});



module.exports = router;
