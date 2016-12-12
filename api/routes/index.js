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

// Family routes
// router
// 	.route('/hotels')
// 	.get(ctrlHotels.hotelsGetAll)
// 	.post(ctrlHotels.hotelsAddOne);

// router
// 	.route('/hotels/:hotelId')
// 	.get(ctrlHotels.hotelsGetOne)
// 	.put(ctrlHotels.hotelsUpdateOne)
// 	.delete(ctrlHotels.hotelsDeleteOne);

// // Review routes
// router
// 	.route('/hotels/:hotelId/reviews')
// 	.get(ctrlReviews.reviewsGetAll)
// 	.post(ctrlUsers.authenticate, ctrlReviews.reviewsAddOne);

// router
// 	.route('/hotels/:hotelId/reviews/:reviewId')
// 	.get(ctrlReviews.reviewsGetOne)
// 	.put(ctrlReviews.reviewsUpdateOne)
// 	.delete(ctrlReviews.reviewsDeleteOne);

// // Authentication
// router
// 	.route('/users/register')
// 	.post(ctrlUsers.register);

// router
// 	.route('/users/login')
// 	.post(ctrlUsers.login);

module.exports = router;