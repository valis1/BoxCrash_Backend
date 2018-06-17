var express = require('express');
var router = express.Router();
var ctrlScores = require('../controllers/scores');
var ctrlReports = require('../controllers/reports');

router.get('/scores/:userID',ctrlScores.getStatistic)
router.post('/scores',ctrlScores.userCreate)
router.put('/scores/:userID',ctrlScores.userUpdate)

router.get('/reports/statistic/:func/:userID',ctrlReports.getStat)

module.exports = router;
