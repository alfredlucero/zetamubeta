var express = require('express');
var router = express.Router();

var ctrlBrothers = require('../controllers/brothers.controllers.js');

// Brother routes
router
	.route('/brothers')
	.get(ctrlBrothers.brothersGetAll)
	.post(ctrlBrothers.brothersAddOne);

router
	.route('/brothers/:brotherId')
	.get(ctrlBrothers.brothersGetOne)
	.put(ctrlBrothers.brothersUpdateOne)
	.delete(ctrlBrothers.brothersDeleteOne);

module.exports = router;