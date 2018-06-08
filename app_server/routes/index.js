var express = require('express');
var router = express.Router();
var ctrlScores=require('../controllers/main');

/* GET home page. */
router.get('/', ctrlScores.score);

module.exports = router;
