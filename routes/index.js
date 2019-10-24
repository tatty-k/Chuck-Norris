var express = require('express');
var router = express.Router();
let jokeCtrl = require('../controllers/chuck');

/* GET home page. */
router.get('/', jokeCtrl.index) 

module.exports = router;
