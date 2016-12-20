var mongoose = require('mongoose');
var Brother = mongoose.model('Brother');

module.exports.brothersGetAll = function(req, res) {
	Brother
		.find()
		.exec(function(err, brothers) {
			if (err) {
				console.log("Error finding brothers");
				res
					.status(500)
					.json(err);
			} else {
				console.log("Found brothers", brothers.length);
				res
					.json(brothers);
			}
		});
};

module.exports.brothersGetOne = function(req, res) {
	var brotherId = req.params.brotherId;
	console.log("GET brotherId", brotherId);

	Brother
		.findById(brotherId)
		.exec(function(err, brother) {
			var response = {
				status : 200,
				message : brother
			};

			if (err) {
				console.log("Error finding brothers");
				response.status = 500;
				response.message = err;
			} else if (!brother) {
				response.status = 404;
				response.message = {
					"message" : "Brother ID not found"
				};
			}

			res
				.status(response.status)
				.json(response.message);
		});
};

module.exports.brothersUpdateOne = function(req, res) {
	var brotherId = req.params.brotherId;
	console.log("PUT brotherId", brotherId);

	Brother
		.findById(brotherId)
		.exec(function(err, brother) {
			var response = {
				status : 200,
				message : brother
			};

			if (err) {
				console.log("Error finding brothers");
				response.status = 500;
				response.message = err;
			} else if (!brother) {
				response.status = 404;
				response.message = {
					"message" : "Brother ID not found"
				};
			}

			if (response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			} else {
				console.log(req.body);
				brother._id = req.body._id;
				brother.name = req.body.name;
				brother.number = req.body.number;
				brother.aka = req.body.aka;
				brother.className = req.body.className;
				brother.crossed = req.body.crossed;
				brother.family = req.body.family;

				console.log(brother);

				brother.save(function(err, brotherUpdated) {
					if (err) {
						res
							.status(500)
							.json(err);
					} else {
						res
							.status(204) // saved successfully
							.json();
					}
				});
			}

		});
};

module.exports.brothersAddOne = function(req, res) {
	Brother
		.create({
			_id : req.body._id,
			name : req.body.name,
			number : req.body.number,
			aka : req.body.aka,
			className : req.body.className,
			crossed : req.body.crossed,
			family : req.body.family
		}, function(err, brother) {
			if (err) {
				console.log("Error creating brother");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Brother created", brother);
				res
					.status(201) // Created
					.json(brother);
			}
		});
};

module.exports.brothersDeleteOne = function(req, res) {
	var brotherId = req.params.brotherId;

	Brother
		.findByIdAndRemove(brotherId)
		.exec(function(err, brother) {
			if (err) {
				res
					.status(404)
					.json(err);
			} else {
				console.log("Brother deleted, id:", brotherId);
				res
					.status(204)
					.json();
			}
		});
};