var express = require('express');
var router = express.Router();
var ctrlHome=require('../controllers/main');

/* GET home page. */
router.get('/', ctrlHome.home);
router.get('/polytics',ctrlHome.polytics);

module.exports = router;
